<script setup lang="ts">
  import SideMenu from '@/components/SideMenu.vue';
  import BurgerBtn from '@/components/BurgerBtn.vue';
  import Skills from '@/components/Skills.vue';
  import AllSpells from '@/components/AllSpells.vue';
  import MySpells from '@/components/MySpells.vue';
  import useAppStore, { Route } from '@/stores/appStore';
  import 'reset-css';
  import '@/style.css';

  const appStore = useAppStore();
</script>

<template>
  <SideMenu :is-open="appStore.menuIsOpen" />
  <BurgerBtn class="menu-btn" :is-open="appStore.menuIsOpen" @handle-click="appStore.toggleMenu" />

  <MySpells v-if="appStore.route === Route.MySpells" />
  <AllSpells v-if="appStore.route === Route.AllSpells" />
  <Skills v-if="appStore.route === Route.Skills" />
</template>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  .menu-btn {
    position: fixed;
    right: 20px;
    top: 20px;

    z-index: 3;
  }
</style>
