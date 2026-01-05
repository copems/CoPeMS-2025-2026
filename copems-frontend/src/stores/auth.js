import { defineStore } from "pinia";
import { useDraftStore } from "./draft";

// Backend API base URL removed for frontend-only version

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isAuthenticated: false,
    loading: false,
  }),

  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    currentUser: (state) => state.user,
  },

  actions: {
    async login(email, password) {
      this.loading = true;
      try {
        // Simulate login for frontend-only version
        if (email === "demo@demo.com" && password === "demo123") {
          this.user = {
            id: 1,
            email: email,
            email_verified: true,
            status: "active",
            role: "applicant",
          };
          this.isAuthenticated = true;
          localStorage.setItem("accessToken", "demo-access-token");
          localStorage.setItem("refreshToken", "demo-refresh-token");
          localStorage.setItem("user", JSON.stringify(this.user));
          // Simulate loading drafts
          const draftStore = useDraftStore();
          await draftStore.loadDrafts?.();
        } else {
          throw new Error(
            "Login failed: Invalid credentials (frontend-only mode)"
          );
        }
      } catch (error) {
        this.user = null;
        this.isAuthenticated = false;
        console.error("Login error:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async register(email, password, confirmPassword) {
      this.loading = true;
      try {
        // Validate passwords match
        if (password !== confirmPassword) {
          throw new Error("Passwords do not match");
        }
        // Validate password strength
        if (password.length < 6) {
          throw new Error("Password must be at least 6 characters long");
        }
        // Simulate registration for frontend-only version
        if (email && password) {
          localStorage.setItem("accessToken", "demo-access-token");
          localStorage.setItem("refreshToken", "demo-refresh-token");
          localStorage.setItem(
            "user",
            JSON.stringify({ email: email, name: "Demo User" })
          );
          // Simulate auto-login
          await this.login(email, password);
          return {
            success: true,
            message: "Registration and login successful! (frontend-only mode)",
          };
        } else {
          throw new Error(
            "Registration failed: Missing fields (frontend-only mode)"
          );
        }
      } catch (error) {
        console.error("Registration error:", error);
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      // Backend logout removed. Just clear localStorage for frontend-only version.
      this.user = null;
      this.isAuthenticated = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("user");
      // Clear draft data
      const draftStore = useDraftStore();
      draftStore.clearDrafts?.();
    },

    // Check if user is already authenticated (e.g., on app startup)
    async checkAuth() {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");
      const userData = localStorage.getItem("user");

      if ((accessToken || refreshToken) && userData) {
        try {
          this.user = JSON.parse(userData);
          this.isAuthenticated = true;

          // Load user's draft data
          const draftStore = useDraftStore();
          await draftStore.loadDrafts();
        } catch (error) {
          // If there's an error parsing user data, clear everything
          this.logout();
        }
      }
    },
  },
});
