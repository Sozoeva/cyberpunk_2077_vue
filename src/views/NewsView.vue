<script setup lang="ts">
import { useNewsStore } from "@/stores/newsStore";

const newsStore = useNewsStore()

</script>

<template>
  <div class="news relative">
    <img
      class=" absolute w-full h-screen -z-10 opacity-90"
      src="https://images5.alphacoders.com/927/927025.png"
      alt=""
    />
    <div class=" h-screen flex items-center justify-center">
      <p class="text-black">{{ newsStore.oneNews?.title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
