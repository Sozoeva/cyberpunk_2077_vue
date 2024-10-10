<script setup lang="ts">
import { useCharactersStore } from "@/stores/charactersStore";
import { onMounted } from "vue";
import { phantomLiberty } from "@/assets";

const charactersStore = useCharactersStore();

onMounted(() => {
  charactersStore.getCharacters();
});
</script>

<template>
  <div className="cyberpunk_imgs">
    <video autoPlay loop muted>
      <source :src="phantomLiberty" type="video/mp4" />
    </video>

    <section class="bg-black">
      <h>MISSION BRIEFING</h>
    </section>
    <section class="bg-redColor flex flex-col items-center ">
      <h2>DOSSIERS</h2>
      <div class="relative flex gap-80 ">
        <div v-for="character of charactersStore.characters" class=" relative flex items-center flex-col">
          <img
            :src="character.img"
            alt="charsccters images"
            class=" max-w-none characterImg"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.characterImg{
  display: block;
  height: 45.8vw;
  pointer-events: none;
  width: 45.8vw;
}
</style>
