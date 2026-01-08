import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
        // Building Permit Applicant Routes
        {
          path: "applicantinformation",
          name: "applicantinformation",
          component: () => import("@/module/BP/ApplicantInformation.vue"),
        },

        {
          path: "constructioninformation",
          name: "constructioninformation",
          component: () => import("@/module/BP/ConstructionInformation.vue"),
        },
        {
          path: "occupancycharacter",
          name: "occupancycharacter",
          component: () => import("@/module/BP/OccupancyCharacter.vue"),
        },
        {
          path: "signatories",
          name: "signatories",
          component: () => import("@/module/BP/Signatories.vue"),
        },
        {
          path: "navigation",
          name: "navigation",
          component: () => import("@/module/BP/Navigation.vue"),
        },
        {
          path: "planupload",
          name: "planupload",
          component: () => import("@/module/BP/PlanUpload.vue"),
        },
        {
          path: "ancillaryforms",
          name: "ancillaryforms",
          component: () => import("@/module/BP/AncillaryForms.vue"),
        },
        {
          path: "bpadetails",
          name: "bpadetails",
          component: () => import("@/module/BP/BPADetails.vue"),
        },
      ],
    },
  ],
});

export default router;
