<script setup lang="ts">
import SpellCard from './components/SpellCard.vue'
import { spells } from "./SpellList.ts";

// console.log(spells);
  const list = Object.values(spells)
</script>

<template>
  <SpellCard v-for="spell in list" :spell="spell" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
