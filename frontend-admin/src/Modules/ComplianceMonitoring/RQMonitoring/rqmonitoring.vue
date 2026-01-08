<template>
  <v-app>
    <v-app-bar flat color="#ffffff" height="88" app class="elevation-4">
      <v-container
        fluid
        class="d-flex align-center py-0 justify-space-between"
        style="max-width: 100%"
      >
        <div class="d-flex align-center">
          <v-img
            src="https://www2.naga.gov.ph/wp-content/uploads/2022/05/Naga_City_Official_Seal-1.png"
            alt="LGU Seal"
            width="85"
            height="75"
            contain
            class="me-4"
          />
          <div>
            <div class="header-subtitle">REPUBLIC OF THE PHILIPPINES</div>
            <div class="header-title">CITY GOVERNMENT OF NAGA</div>
          </div>
        </div>
        <div class="d-flex align-center">
          <v-menu :close-on-content-click="true" location="bottom end">
            <template #activator="{ props }">
              <v-btn variant="text" v-bind="props" class="profile-btn">
                <div class="d-flex align-center">
                  <v-avatar color="#5B21B6" size="38" class="mr-3">
                    <span style="color: white; font-weight: 600">JT</span>
                  </v-avatar>
                  <div class="text-left">
                    <div
                      class="profile-name"
                      style="font-size: 14px; font-weight: 600"
                    >
                      John Timothy Umali
                    </div>
                    <div class="profile-role" style="font-size: 12px">
                      OBO Monitoring
                    </div>
                  </div>
                  <v-icon class="ml-2" style="color: #6b7280"
                    >mdi-chevron-down</v-icon
                  >
                </div>
              </v-btn>
            </template>
            <v-card min-width="250" class="mt-1">
              <v-list>
                <v-list-item @click="logOut">
                  <v-icon class="mr-2" size="small">mdi-logout</v-icon> Log Out
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="main-content">
      <v-snackbar
        v-model="snackbar"
        :timeout="3000"
        :color="snackbarColor"
        elevation="24"
      >
        {{ snackbarText }}
        <template v-slot:actions>
          <v-btn variant="text" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>

      <div class="page-container">
        <div class="application-header mb-4">
          <div class="d-flex align-center mb-2">
            <v-btn
              icon
              variant="text"
              size="small"
              class="mr-2"
              @click="goBack"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <div>
              <h2 class="header-main-title">Monitoring & Documentation</h2>
              <p class="header-app-number">
                Application No. {{ applicant.applicationNumber }}
              </p>
            </div>
          </div>
        </div>

        <v-card class="elevation-1 tabs-card">
          <v-tabs v-model="activeTab" color="#3b82f6" class="custom-tabs">
            <v-tab value="applicant"
              ><v-icon class="mr-2" size="small">mdi-account-circle</v-icon
              >Applicant Information</v-tab
            >
            <v-tab value="plans"
              ><v-icon class="mr-2" size="small"
                >mdi-file-document-multiple</v-icon
              >Building Plans</v-tab
            >
          </v-tabs>

          <v-divider></v-divider>

          <v-window v-model="activeTab">
            <v-window-item value="applicant">
              <div class="tab-content pa-6">
                <div class="details-page-header mb-6">
                  <div class="d-flex align-center mb-2">
                    <div class="header-icon-box">
                      <v-icon size="28" color="white"
                        >mdi-account-details</v-icon
                      >
                    </div>
                    <div class="ml-4">
                      <h2 class="details-main-title">Applicant Information</h2>
                      <p class="details-subtitle">
                        Registered citizen of Naga City, Philippines
                      </p>
                    </div>
                  </div>
                </div>
                <v-card class="details-card elevation-1">
                  <v-card-text class="pa-6">
                    <v-row>
                      <v-col cols="12" md="4"
                        ><div class="detail-label">FULL NAME</div>
                        <div class="detail-value">
                          {{ applicant.name }}
                        </div></v-col
                      >
                      <v-col cols="12" md="4"
                        ><div class="detail-label">CITIZENSHIP</div>
                        <div class="detail-value">
                          {{ applicant.citizenship }}
                        </div></v-col
                      >
                      <v-col cols="12" md="4"
                        ><div class="detail-label">DATE OF BIRTH</div>
                        <div class="detail-value">
                          {{ applicant.dob }}
                        </div></v-col
                      >
                      <v-col cols="12" md="8"
                        ><div class="detail-label">LOCAL ADDRESS</div>
                        <div class="detail-value">
                          {{ applicant.address }}
                        </div></v-col
                      >
                      <v-col cols="12" md="4"
                        ><div class="detail-label">BARANGAY</div>
                        <div class="detail-value">
                          {{ applicant.barangay }}
                        </div></v-col
                      >
                    </v-row>
                  </v-card-text>
                </v-card>
              </div>
            </v-window-item>

            <v-window-item value="plans">
              <div class="tab-content pa-6">
                <v-table class="plans-table border">
                  <thead>
                    <tr>
                      <th class="font-weight-bold">Plan Type</th>
                      <th class="font-weight-bold">Assigned Engineer</th>
                      <th class="font-weight-bold">Latest Remark</th>
                      <th class="font-weight-bold">Status</th>
                      <th class="font-weight-bold text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(plan, index) in buildingPlans" :key="index">
                      <td>
                        <div class="d-flex align-center">
                          <v-icon color="#ef4444" class="mr-2"
                            >mdi-file-pdf-box</v-icon
                          >
                          <span
                            class="font-weight-bold"
                            style="font-size: 13px"
                            >{{ plan.name }}</span
                          >
                        </div>
                      </td>
                      <td style="font-size: 13px">
                        {{ plan.assignedEngineer }}
                      </td>
                      <td
                        style="font-size: 13px"
                        class="text-grey-darken-1 text-truncate"
                      >
                        {{ plan.history[0]?.remarks || "Awaiting evaluation" }}
                      </td>
                      <td>
                        <v-chip
                          :color="getStatusColor(plan.status)"
                          size="x-small"
                          label
                          class="font-weight-bold"
                          >{{ plan.status }}</v-chip
                        >
                      </td>
                      <td class="text-center">
                        <v-btn
                          variant="outlined"
                          color="#3b82f6"
                          size="x-small"
                          class="font-weight-bold"
                          @click="openLog(plan)"
                          >View Log</v-btn
                        >
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </div>
            </v-window-item>
          </v-window>
        </v-card>
      </div>
    </v-main>

    <v-dialog v-model="logDialog" max-width="850px">
      <v-card class="rounded-lg">
        <v-card-title
          class="pa-4 d-flex align-center justify-space-between"
          style="background: #f8fafc; border-bottom: 1px solid #e5e7eb"
        >
          <div class="d-flex align-center">
            <div class="header-icon-box mr-3" style="width: 40px; height: 40px">
              <v-icon size="20" color="white">mdi-history</v-icon>
            </div>
            <div>
              <div class="font-weight-bold" style="font-size: 16px">
                Transaction History
              </div>
              <div class="text-caption text-grey">
                {{ selectedPlan?.name }} | Progress:
                {{ selectedPlan?.progress }}%
              </div>
            </div>
          </div>
          <v-btn
            icon="mdi-close"
            variant="text"
            size="small"
            @click="logDialog = false"
          ></v-btn>
        </v-card-title>

        <v-card-text class="pa-0">
          <div class="pa-4 bg-grey-lighten-5">
            <v-progress-linear
              :model-value="selectedPlan?.progress"
              color="#3b82f6"
              height="8"
              rounded
            ></v-progress-linear>
          </div>
          <v-table class="log-details-table">
            <thead>
              <tr style="background: #f9fafb">
                <th class="text-left py-3">Timestamp</th>
                <th class="text-left py-3">Action</th>
                <th class="text-left py-3">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(event, i) in selectedPlan?.history" :key="i">
                <td style="font-size: 12px">
                  <b>{{ event.date }}</b
                  ><br />{{ event.time }}
                </td>
                <td>
                  <v-chip
                    :color="getEventColor(event.action)"
                    size="x-small"
                    label
                    class="font-weight-bold"
                    >{{ event.action }}</v-chip
                  >
                </td>
                <td class="py-3">
                  <div class="remarks-box" style="font-size: 13px">
                    {{ event.remarks }}
                  </div>
                </td>
              </tr>
            </tbody>
          </v-table>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions class="pa-4 d-flex align-center">
          <v-text-field
            label="Assigned Personnel"
            :model-value="selectedPlan?.assignedEngineer"
            readonly
            density="compact"
            variant="solo-filled"
            flat
            hide-details
            prepend-inner-icon="mdi-account-lock"
            class="mr-4"
            style="max-width: 300px"
          ></v-text-field>
          <v-spacer></v-spacer>
          <v-btn variant="text" color="grey" @click="logDialog = false"
            >Close</v-btn
          >
          <v-btn
            color="#3b82f6"
            variant="flat"
            size="small"
            prepend-icon="mdi-bell-ring"
            class="font-weight-bold px-4"
            @click="notifyPersonnel"
          >
            Notify Personnel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const activeTab = ref("plans");
const logDialog = ref(false);
const selectedPlan = ref(null);

const snackbar = ref(false);
const snackbarText = ref("");
const snackbarColor = ref("success");

const applicant = ref({
  applicationNumber: "OP-2025-002",
  name: "Juanito D. Dela Cruz",
  citizenship: "Filipino",
  dob: "August 15, 1988",
  address: "123 Magsaysay Ave, Concepcion Pequeña",
  barangay: "Concepcion Pequeña",
});

const buildingPlans = ref([
  {
    name: "Architectural Plans",
    status: "Under Evaluation",
    assignedEngineer: "Arch. Romeo",
    progress: 65,
    history: [
      {
        action: "EVALUATING",
        date: "Dec 28, 2025",
        time: "02:30 PM",
        remarks: "Spatial floor plan review in progress.",
      },
      {
        action: "SUBMITTED",
        date: "Dec 20, 2025",
        time: "09:00 AM",
        remarks: "Digital blueprints received.",
      },
    ],
  },
  {
    name: "Structural Plans",
    status: "Returned",
    assignedEngineer: "Engr. Santos",
    progress: 30,
    history: [
      {
        action: "RETURNED",
        date: "Dec 22, 2025",
        time: "04:45 PM",
        remarks: "Load calculation for C2 beam missing.",
      },
    ],
  },
  {
    name: "Electrical Plans",
    status: "Verified",
    assignedEngineer: "Engr. Lopez",
    progress: 100,
    history: [
      {
        action: "VALIDATED",
        date: "Dec 23, 2025",
        time: "03:20 PM",
        remarks: "All load schedules verified.",
      },
    ],
  },
  {
    name: "Mechanical Plans",
    status: "Pending",
    assignedEngineer: "Engr. Diaz",
    progress: 0,
    history: [],
  },
]);

const openLog = (plan) => {
  selectedPlan.value = plan;
  logDialog.value = true;
};

const notifyPersonnel = () => {
  snackbarText.value = `Notification sent to ${selectedPlan.value.assignedEngineer} regarding ${selectedPlan.value.name}.`;
  snackbarColor.value = "#3b82f6";
  snackbar.value = true;
};

const getStatusColor = (status) => {
  const colors = {
    Verified: "success",
    "Under Evaluation": "blue",
    Returned: "error",
    Pending: "grey",
  };
  return colors[status] || "grey";
};

const getEventColor = (action) => {
  const colors = {
    VALIDATED: "green",
    SUBMITTED: "blue",
    EVALUATING: "orange",
    RETURNED: "red",
  };
  return colors[action] || "grey";
};

const goBack = () => router.push("/");
const logOut = () => console.log("Logout triggered");
</script>

<style scoped>
.main-content {
  background-color: #f5f6fa;
  padding-top: 88px;
}
.page-container {
  max-width: 1460px;
  margin: 16px auto 0;
  padding: 0 12px;
}
.header-subtitle {
  font-size: 12px;
  font-weight: 600;
  color: #6b7280;
}
.header-title {
  font-size: 18px;
  font-weight: 800;
  color: #1f2937;
}
.header-main-title {
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  margin: 0;
}
.header-app-number {
  font-size: 14px;
  color: #6b7280;
}
.header-icon-box {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.details-main-title {
  font-size: 22px;
  font-weight: 700;
  color: #111827;
  margin: 0;
}
.details-subtitle {
  font-size: 14px;
  color: #6b7280;
  margin-top: 4px;
}
.details-card {
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
}
.detail-label {
  font-size: 11px;
  font-weight: 600;
  color: #9ca3af;
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}
.detail-value {
  font-size: 15px;
  font-weight: 500;
  color: #111827;
}
.plans-table {
  background: white;
  border-radius: 8px;
}
.remarks-box {
  background: #f9fafb;
  padding: 8px 12px;
  border-radius: 6px;
  border-left: 3px solid #3b82f6;
  color: #4b5563;
}
</style>