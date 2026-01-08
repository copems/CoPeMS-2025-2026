import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "",
          name: "Applicant-Homepage",
          component: () => import("@/pages/Applicant-Homepage.vue"),
        },
        {
          path: "Applicant-Login",
          name: "Applicant-Login",
          component: () => import("@/pages/Applicant-Login.vue"),
        },
        {
          path: "Applicant-Registration",
          name: "Applicant-Registration",
          component: () => import("@/pages/Applicant-Registration.vue"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("@/pages/Applicant-Registration.vue"),
        },
        {
          path: "Applicant-bpInquiry",
          name: "Applicant-bpInquiry",
          component: () => import("@/pages/Applicant-bpInquiry.vue"),
        },
        {
          path: "Applicant-opInquiry",
          name: "Applicant-opInquiry",
          component: () => import("@/pages/Applicant-opInquiry.vue"),
        },
        {
          path: "Applicant-ForgotPW",
          name: "Applicant-ForgotPW",
          component: () => import("@/pages/Applicant-ForgotPW.vue"),
        },
      ],
    },
    {
      path: "/applicant",
      component: () => import("@/layouts/ApplicantLayout.vue"),
      children: [
        // Occupancy Permit Applicant Routes
        {
          path: "FormsSection",
          name: "FormsSection",
          component: () => import("@/module/OP/FormsSection.vue"),
        },
        {
          path: "OPapply",
          name: "OPapply",
          component: () => import("@/module/OP/OPapply.vue"),
        },
        {
          path: "OPlocation",
          name: "OPlocation",
          component: () => import("@/module/OP/OPlocation.vue"),
        },
        {
          path: "OPowner",
          name: "OPowner",
          component: () => import("@/module/OP/OPowner.vue"),
        },
        {
          path: "OPsignatories",
          name: "OPsignatories",
          component: () => import("@/module/OP/OPsignatories.vue"),
        },
        {
          path: "OPtype",
          name: "OPtype",
          component: () => import("@/module/OP/OPtype.vue"),
        },
      ],
    },
  ],
});
export default router;
