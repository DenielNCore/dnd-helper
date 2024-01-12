<script setup lang="ts">
  import SideMenu from '@/components/SideMenu.vue';
  import BurgerBtn from '@/components/BurgerBtn.vue';
  import Skills from '@/components/Skills.vue';
  import AllSpells from '@/components/AllSpells.vue';
  import MySpells from '@/components/MySpells.vue';
  import BattlePage from '@/components/BattlePage.vue';
  import CampaignPage from '@/components/CampaignPage.vue';
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
  <BattlePage v-if="appStore.route === Route.Battle" />
  <CampaignPage v-if="appStore.route === Route.Campaign" />
</template>

<style scoped lang="scss">
  .menu-btn {
    position: fixed;
    right: 20px;
    top: 20px;

    z-index: 3;
  }
</style>
