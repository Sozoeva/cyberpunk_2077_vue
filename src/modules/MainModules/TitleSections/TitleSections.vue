<script setup lang="ts">
import Button from "@/components/Button.vue";
</script>

<template>
  <section class="main_title text-center pt-titleTop">
    <h2 class="uppercase mb-20 text-5xl font-black text-black">
      Get the Ultimate Cyberpunk 2077 Experience
    </h2>
    <div class="main_btns flex flex-row justify-center gap-14">
      <Button class="w-72">
        <RouterLink to="/cyberpunk" class="nav_link"> Learn more </RouterLink>
      </Button>
      <Button class="w-72">
        <a
          class="link"
          href="https://www.youtube.com/watch?v=LembwKDo1Dk"
          target="_blank"
          rel="noreferrer"
        >
          Watch trailer
        </a>
      </Button>
    </div>
    <div class="main_title_line"></div>
  </section>
</template>

<style scoped langg="scss">
.main_title {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1.2)
    ),
    url("https://www.cyberpunk.net/build/images/dots-news-3cd72d29.png");
}

.main_title_line {
  background-color: rgba(255, 255, 255, 0.5);
  content: "";
  padding: 1px;
  margin: 2% 2% 0 2%;
}
</style>
