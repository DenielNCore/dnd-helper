<script setup lang="ts">
  import SpellCard from '@/components/SpellCard.vue';
  import BurgerBtn from '@/components/BurgerBtn.vue';
  import SideMenu from '@/components/SideMenu.vue';
  import { ISpell, Spell, spells } from '@/SpellList';
  import useAppStore from '@/stores/appStore';
  import '@/style.css';
  import 'reset-css';

  const appStore = useAppStore();

  // console.log(spells);
  const list: [Spell, ISpell][] = Object.entries(spells) as [Spell, ISpell][];
</script>

<template>
  <SideMenu :is-open="appStore.menuIsOpen" />
  <BurgerBtn class="menu-btn" :is-open="appStore.menuIsOpen" @handle-click="appStore.toggleMenu" />
  <SpellCard v-for="[id, spell] in list" :id="id" :key="id" :spell="spell" />
</template>

<style scoped>
  .menu-btn {
    position: absolute;
    right: 10px;
  }
</style>
