<script setup lang="ts">
import { onMounted } from "vue";
import { useNewsStore } from "@/stores/newsStore";
import { useResourceStore } from "@/stores/resourceStore";
import Button from "../components/Button.vue";
import router from "@/router";

const newsStore = useNewsStore();

const resourceStore = useResourceStore();

onMounted(() => {
  newsStore.getNews();
  resourceStore.getResource();
});

const onPage = (path: string) => {
  router.push(`/${path}`);
};

const truncateText = (text: string) => {
  if (text.length > 30) {
    return text.substring(0, 30) + " . . .";
  } else {
    return text;
  }
};
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
      <section class="main_title text-center pt-titleTop">
        <h2 class="uppercase mb-20 text-5xl">
          "Cyberpunk 2077" available now on all platforms
        </h2>
        <div class="main_btns flex flex-row justify-center gap-14">
          <Button class="w-72">
            <RouterLink to="/cyberpunk" class="nav_link">
              Learn more
            </RouterLink>
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

      <section
        id="news"
        class="main_news relative grid grid-cols-2 gap-10 bg-black px-10 pb-40 pt-5"
      >
        <div class="main_news_now">
          <h2 class="h-full text-4xl text-blueWhite flex items-end pl-5">
            Patch 2.12
          </h2>
          <p class="text-xl font-bold pt-3">
            Patch 2.12 for Cyberpunk 2077 and Phantom Liberty is being rolled
            out on PC, PlayStation 5 and Xbox Series X|S.
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
      <section class="p-48 text-center bg-yellow">
        <h2 class="uppercase mb-8 text-5xl text-black font-medium">
          Welcome to the dystopian future
        </h2>
        <p class="mb-8 text-2xl text-black font-medium">
          Cyberpunk 2077 is an adventure role-playing game set in the metropolis
          of Night City, where power, luxury and body modification are valued
          above all else. You play as V, a mercenary in search of a device that
          can create immortality. You develop by changing your character's cyber
          implants, skills and playstyle, exploring an open world where your
          actions affect the course of the plot and everything that surrounds
          you.
        </p>
      </section>
      <div class="bg-yellow px-10 pb-20">
        <div class="w-full p-3 grid grid-cols-4 bg-black gap-5">
          <div
            v-for="resource in resourceStore.resource"
            class="relative flex justify-center"
          >
            <img :src="resource.img" alt="" />
            <Button class="button" @click="onPage(resource.title)">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
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

.button {
  position: absolute;
  width: 80%;
  bottom: 10px;
  color: #00f0ff;
  border: 1px solid #00f0ff;
  text-align: center;
}
</style>
