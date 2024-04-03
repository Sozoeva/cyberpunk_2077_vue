import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import CyberpunkView from "@/views/CyberpunkView.vue";
import NewsView from "@/views/NewsView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "main",
      path: "/",
      component: MainView,
    },
    {
      name: "cyberpunk",
      path: "/cyberpunk",
      component: CyberpunkView,
    },
    {
      name: "news",
      path: "/news",
      component: NewsView,
    },
  ],
});

export default router;
