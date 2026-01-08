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
        {
          path: "ComplianceMonitoring",
          name: "ComplianceMonitoring",
          component: () =>
            import("@/Modules/ComplianceMonitoring/Compliance/compliance.vue"), // Or any other component for the root
        },

        {
          path: "rqmonitoring",
          name: "rqmonitoring",
          component: () =>
            import(
              "@/Modules/ComplianceMonitoring/RQMonitoring/rqmonitoring.vue"
            ), // Or any other component for the root
        },

        {
          path: "applicantinfo",
          name: "applicantinfo",
          component: () =>
            import(
              "@/Modules/ComplianceMonitoring/ApplicantInfo/applicantinfo.vue"
            ), // Or any other component for the root
        },
      ],
    },
  ],
});

export default router;
