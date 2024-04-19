import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import CyberpunkView from "@/views/CyberpunkView.vue";
import NewsView from "../views/NewsView.vue"
import PhantomLiberty from "@/views/PhantomLiberty.vue";

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
      path: "/news/:id",
      component: NewsView,
    },
    {
      name: "phantom",
      path: "/phantom",
      component: PhantomLiberty, 
    },
  ],
});

router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
