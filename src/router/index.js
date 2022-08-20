import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
  },
  {
    path: "/members",
    name: "members",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MemberView.vue"),
    children: [
      {
        path: "/members",
        name: "allmembers",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/table/MainTableComponent.vue"
          ),
        meta: {
          exists: 1,
        },
      },
      {
        path: "members/:id",
        name: "onemember",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/testeComponent.vue"
          ),
      },
    ],
  },
  {
    path: "/churches",
    name: "churches",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ChurchView.vue"),
    children: [
      {
        path: "/churches",
        name: "allchurches",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/table/MainTableComponent.vue"
          ),
        meta: {
          exists: 1,
        },
      },
      {
        path: "churches/:id",
        name: "onechurche",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/testeComponent.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
