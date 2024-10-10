<script setup lang="ts">
import { IntroSections } from "@/modules";
import { NewsSections } from "@/modules";
import { TitleSections } from "@/modules";
import { mainVideo } from "@/assets";
</script>

<template>
  <main class="relative">
    <video autoPlay loop muted class="absolute w-full -z-10">
      <source :src="mainVideo" type="video/mp4" />
    </video>
    <div>
      <TitleSections />
      <NewsSections />
      <IntroSections />
    </div>
  </main>
</template>
