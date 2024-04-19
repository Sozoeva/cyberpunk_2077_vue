<template>
  <button class="text-yellow">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  font-size: 22px;
  padding: 10px 0;
  margin-bottom: 2%;
  background-color: transparent;
  border: 1px solid #fcee0a;
  text-transform: uppercase;
  border-radius: 0 0 20px 0;
}
</style>
