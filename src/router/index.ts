import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "layout",
    redirect: "/home",
    component: () => import("@/views/index.vue"),
    children: [
      {
        //  首页
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
