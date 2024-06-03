<script setup lang="ts">
import { Header } from './modules';
import { Footer } from './modules';
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <Header/>
  <RouterView  />
  <Footer/>
</template>
