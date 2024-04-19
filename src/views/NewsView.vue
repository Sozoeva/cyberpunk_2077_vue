<script setup lang="ts">
import { useNewsStore } from "@/stores/newsStore";

const newsStore = useNewsStore()

</script>

<template>
  <div class=" relative">
    <img
      class="w-full absolute -z-10"
      src="https://techraptor.net/sites/default/files/styles/content_inline_mobile/public/images/Cyberpunk%202077%20Free%20DLC%20Graffiti%20Interstitial.jpg?itok=vweAlSU7"
      alt=""
    />
    <div class=" h-screen flex items-center justify-center">
      <p>{{ newsStore.oneNews?.title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
