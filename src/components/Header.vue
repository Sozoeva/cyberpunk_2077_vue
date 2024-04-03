<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const headerBackgroundColor = ref(true);

watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    headerBackgroundColor.value = newPath === "/" ? true : false;
  }
);
</script>

<template>
  <header className="header fixed z-10 w-full p-10">
    <nav className="nav flex justify-between items-center">
      <RouterLink to="/" className="nav_link" v-if="headerBackgroundColor">
        <div>
          <img class="w-64" src="../assets/logo2.png" alt="logo" />
        </div>
      </RouterLink>
      <RouterLink to="/" v-else>
        <div>
          <img class="w-64" src="../assets/logo.png" alt="logo" />
        </div>
      </RouterLink>
      <div className="links flex px-16 py-1 backdrop-blur-3xl">
        <RouterLink to="/cyberpunk">
          <a className="link" href=""> Cyberpunk 2077 </a>
        </RouterLink>
        <RouterLink to="/phantom">
          <a className="link" href=""> Phantom Vault </a>
        </RouterLink>
        <RouterLink to="/buy">
          <a className="link" href=""> Community </a>
        </RouterLink>
        <div>
          <a
            className="link"
            href="https://www.netflix.com/kg-ru/title/81054853"
          >
            Netflix
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(0, 0, 0, -0.2)
  );

  .links {
    border: 1px solid #fcee0a;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px 0 20px 0;
  }

  .link {
    padding: 7px 20px;
    font-size: 18px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.3s;
  }

  .link:hover {
    background-color: #fcee0a;
    color: black;
  }
}
</style>
