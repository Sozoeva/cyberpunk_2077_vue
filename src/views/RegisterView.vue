<script setup lang="ts">
import { ref } from "vue";

const emailValue = ref<string>("");
const usernameValue = ref<string>("");
const passwordValue = ref<string>("");

</script>

<template>
  <div
    class="relative w-full h-screen flex flex-col gap-3 items-center justify-center"
  >
    <!-- <img class=" absolute -z-10"
      src="https://cdn.akamai.steamstatic.com/steam/apps/1091500/ss_872822c5e50dc71f345416098d29fc3ae5cd26c1.1920x1080.jpg?t=1706698946"
      alt=""
    /> -->
    <label class="text-2xl text-black">Регистрация</label>

    <from class="text-black flex flex-col gap-3 w-96">
      <input
        type="text"
        placeholder="Username"
        class="border py-1 pl-1 rounded-md bg-transparent"
        v-model="emailValue"
      />
      <input
        type="email"
        placeholder="Email"
        class="border py-1 pl-1 rounded-md bg-transparent"
        v-model="usernameValue"
      />
      <input
        type="password"
        placeholder="Password"
        class="border py-1 pl-1 rounded-md bg-transparent"
        v-model="passwordValue"
      />

      <div class=" flex justify-center gap-4">
        <button
        class="border bg-blueColor py-1 px-3 rounded-lg"
      >
        Логин
      </button>
      <button
        class="border bg-blueColor py-1 px-3 rounded-lg"
      >
        Зарегистрироваться
      </button>
      </div>
      
    </from>
  </div>
</template>

<style scoped lang="scss">

</style>
