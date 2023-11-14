<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      isOpen: boolean;
    }>(),
    {
      isOpen: false,
    },
  );
</script>

<template>
  <div class="menu" :class="{ 'is-open': isOpen }">
    <div>Всі закляття</div>
    <div>Всі закляття</div>
    <div>Всі закляття</div>
  </div>
</template>

<style scoped lang="scss">
  .menu {
    width: 200px;
    height: 100%;
    background-color: red;
    position: fixed;
    right: -200px;

    top: 0;
    transition: right 0.7s ease;

    &.is-open {
      right: 0;

      transition: right 0.7s ease;
    }
  }
</style>
