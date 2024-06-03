<script setup lang="ts">
import { IntroSections } from "@/modules";
import { NewsSections } from "@/modules";
import { TitleSections } from "@/modules";
</script>

<template>
  <main class="relative">
    <video autoPlay loop muted class="absolute w-full -z-10">
      <source
        src="https://cdn-l-cyberpunk.cdprojektred.com/video/CP2077_UE_KV_Animation_1920x1080_AV1.mp4"
        type="video/mp4"
      />
    </video>
    <div>
      <TitleSections />
      <NewsSections />
      <IntroSections />
    </div>
  </main>
</template>

