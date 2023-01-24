import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SpecialityView from "../views/SpecialityView.vue";
import DocsView from "../views/DocsView.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/speciality/:id",
      name: "speciality",
      component: SpecialityView,
    },
    {
      path: "/docs/:id",
      name: "docs",
      component: DocsView,
    },
    {
      path: "/:catchAll(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
