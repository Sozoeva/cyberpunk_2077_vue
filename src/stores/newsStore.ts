import { ref } from "vue";
import { defineStore } from "pinia";
import type { INews } from "@/types/types";
import axios from "axios";

export const useNewsStore = defineStore("news", () => {
  const news = ref<INews[]>([]);
  const oneNews = ref<INews>();

  const getNews = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_MAIN_URL}/api/news`
      );
      news.value = data;
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    }
  };

  const getNewsById = async (id: number) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_MAIN_URL}/api/news/${id}`
      );
      oneNews.value = data;
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    }
  };

  return { news, getNews, getNewsById, oneNews };
});
