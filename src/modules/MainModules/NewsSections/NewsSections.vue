<script setup lang="ts">
import { useNewsStore } from "@/stores/newsStore";
import { onMounted } from "vue";
const newsStore = useNewsStore();

onMounted(() => {
  newsStore.getNews();
});

const truncateText = (text: string) => {
  if (text.length > 30) {
    return text.substring(0, 30) + " . . .";
  } else {
    return text;
  }
};
</script>

<template>
  <section
    id="news"
    class="main_news relative grid grid-cols-2 gap-10 bg-black px-10 pb-40 pt-5"
  >
    <div class="main_news_now">
      <h2 class="h-full text-4xl text-blueWhite flex items-end pl-5">
        Patch 2.12
      </h2>
      <p class="text-xl font-bold pt-3">
        Patch 2.12 for Cyberpunk 2077 and Phantom Liberty is being rolled out on
        PC, PlayStation 5 and Xbox Series X|S.
      </p>
    </div>
    <div class="grid grid-cols-2 gap-5">
      <div v-for="news in newsStore.news">
        <p class="flex justify-end">News_</p>
        <RouterLink :to="`/news/${news.id}`">
          <img
            class="w-80"
            :src="news.img"
            alt=""
            @click="newsStore.getNewsById(news.id)"
          />
        </RouterLink>
        <p class="text-xl font-bold">{{ truncateText(news.title) }}</p>
        <div class="main_news_line"></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.main_news {
  background-image: url("https://www.cyberpunk.net/build/images/dots-news-3cd72d29.png");

  .main_news_now {
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 1.2)
      ),
      url("https://cdn-s.cdprojektred.com/news/panoramic/e8795fc79994c7d4b1803575157627e884c7f9d13b7815a0.png");
    content: "";
    max-width: 100%;
    background-size: cover;
    border: 5px solid #00f0ff;
    height: 75%;
  }

  .main_news_line {
    background-color: white;
    content: "";
    height: 2px;
    width: 10%;
    margin: 5% 0;
  }
}

.main_news:after {
  background-image: url("https://www.cyberpunk.net/build/images/razor-18e21da3.svg");
  bottom: 0;
  content: "";
  height: 48px;
  left: 0;
  position: absolute;
  width: 100%;
}
</style>
