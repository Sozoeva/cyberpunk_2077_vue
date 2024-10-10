import { ref } from "vue";
import { defineStore } from "pinia";
import type { IResource } from "@/types/types";
import axios from "axios";

export const useResourceStore = defineStore("resource", () => {
  const resource = ref<IResource[]>([]);

  const getResource = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_MAIN_URL}/api/resource`
      );
      resource.value = data;
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    }
  };

  return { resource, getResource };
});
