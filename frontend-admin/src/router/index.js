import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    // Route for Main Pages
    {
      path: "/",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        // Main Pages for All Users
        {
          path: "",
          name: "adminLanding",
          component: () => import("@/pages/adminLanding.vue"),
        },
      ],
    },
  ],
});

export default router;
