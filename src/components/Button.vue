<template>
  <button class="button text-yellow">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  font-size: 22px;
  padding: 10px 0;
  margin-bottom: 2%;
  background-color: transparent;
  border: 1px solid #fcee0a;
  text-transform: uppercase;
  border-radius: 0 0 20px 0;
}
</style>
