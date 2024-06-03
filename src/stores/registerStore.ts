import axios from "axios";
import { ref } from "vue";
import { defineStore } from "pinia";
import type { IUsers } from "@/types/types";

export const useUsersStore = defineStore("users", () => {
  const newUser = ref<IUsers>();

  const registerUser = async (newUser:IUsers ) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_MAIN_URL}/register`,
        newUser
      );
      localStorage.setItem("token", data.accessToken);
    } catch (error) {
      console.log("Что-то пошло не так...", error);
    }
  };

  return {
    registerUser,
  };
});
