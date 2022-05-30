import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    list: [{ path: "/", name: "Dashboard" }],
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/dashboardView.vue"),
  },
  {
    path: "/login",
    name: "LoginAuth",
    list: [{ path: "/", name: "LoginAuth" }],
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/login/loginView.vue"),
  },
  {
    path: "/net-ips/alert",
    name: "Alert",
    list: [
      {
        path: "/net-ips/anomalies",
        name: "NetIPS",
      },
      {
        path: "/net-ips/alert",
        name: "Alert",
      },
    ],
    component: () =>
      import(
        /* webpackChunkName: "netIPS-alert" */ "../views/netIPS/alertView.vue"
      ),
  },
  {
    path: "/net-ips/anomalies",
    name: "Anomaly Events",
    list: [
      {
        path: "/net-ips/anomalies",
        name: "NetIPS",
      },
    ],
    component: () =>
      import(
        /* webpackChunkName: "netIPS-anomalies" */ "../views/netIPS/anomaliesView.vue"
      ),
  },
  {
    path: "/net-ips/intrusion",
    name: "Intrusion Monitoring",
    list: [
      {
        path: "/net-ips/anomalies",
        name: "NetIPS",
      },
    ],
    component: () =>
      import(
        /* webpackChunkName: "netIPS-intrusion" */ "../views/netIPS/intrusionView.vue"
      ),
  },
  {
    path: "/net-ips/report",
    name: "Report",
    list: [
      {
        path: "/net-ips/anomalies",
        name: "NetIPS",
      },
    ],
    component: () =>
      import(
        /* webpackChunkName: "netIPS-report" */ "../views/netIPS/reportView.vue"
      ),
  },
  {
    path: "/net-ips/search",
    name: "Search",
    list: [
      {
        path: "/net-ips/anomalies",
        name: "NetIPS",
      },
    ],
    component: () =>
      import(
        /* webpackChunkName: "netIPS-search" */ "../views/netIPS/searchView.vue"
      ),
  },
  {
    path: "/net-ips/statistics",
    name: "Statistics",
    list: [
      {
        path: "/net-ips/anomalies",
        name: "NetIPS",
      },
    ],
    component: () =>
      import(
        /* webpackChunkName: "netIPS-statistics" */ "../views/netIPS/statisticsView.vue"
      ),
  },
  {
    path: "/setting/user-list",
    name: "User List",
    list: [
      {
        path: "/setting/user-list",
        name: "Settings",
      },
    ],
    component: () =>
      import(
        /* webpackChunkName: "settings-user-list" */ "../views/settings/userListView.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
