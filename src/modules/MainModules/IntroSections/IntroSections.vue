<script setup lang="ts">
import Button from "@/components/Button.vue";
import router from "@/router";
import { useResourceStore } from "@/stores/resourceStore";
import { onMounted } from "vue";

const resourceStore = useResourceStore();

onMounted(() => {
  resourceStore.getResource();
});

const onPage = (path: string) => {
  router.push(`/${path}`);
};
</script>

<template>
  <section class="intro">
    <div class="p-48 text-center bg-yellow">
      <h2 class="uppercase mb-8 text-5xl text-black font-medium">
        Welcome to the dystopian future
      </h2>
      <p class="mb-8 text-2xl text-black font-medium">
        Cyberpunk 2077 is an adventure role-playing game set in the metropolis
        of Night City, where power, luxury and body modification are valued
        above all else. You play as V, a mercenary in search of a device that
        can create immortality. You develop by changing your character's cyber
        implants, skills and playstyle, exploring an open world where your
        actions affect the course of the plot and everything that surrounds you.
      </p>
    </div>

    <div class="bg-yellow px-10 pb-20">
      <div class="w-full p-3 grid grid-cols-4 bg-black gap-5">
        <div
          v-for="resource in resourceStore.resource"
          class="relative flex justify-center"
        >
          <img :src="resource.img" alt="" />
          <Button class="button" @click="onPage(resource.title)"
            >Learn more</Button
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.button {
  position: absolute;
  width: 80%;
  bottom: 10px;
  color: #00f0ff;
  border: 1px solid #00f0ff;
  text-align: center;
}
</style>
