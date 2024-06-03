import { ref } from "vue";
import { defineStore } from "pinia";
import type { ICharscters } from "@/types/types";
import axios from "axios";

export const useCharactersStore = defineStore("characters", () => {
  const characters = ref<ICharscters[]>([]);  

  const getCharacters = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_MAIN_URL}/characters`
      );
      characters.value = data;
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    }
  };

  return { characters, getCharacters};
});
