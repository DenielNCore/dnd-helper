<script setup lang="ts">
  import SideMenu from '@/components/SideMenu.vue';
  import BurgerBtn from '@/components/BurgerBtn.vue';
  import useAppStore from '@/stores/appStore';

  const appStore = useAppStore();

  const closeMenu = () => {
    appStore.closeMenu();
  };
</script>

<template>
  <SideMenu :is-open="appStore.menuIsOpen" @handle-click="closeMenu" />
  <BurgerBtn class="menu-btn" :is-open="appStore.menuIsOpen" @handle-click="appStore.toggleMenu" />
  <router-view></router-view>
</template>

<style scoped lang="scss">
  .menu-btn {
    position: fixed;
    right: 20px;
    top: 20px;

    z-index: 2;
  }
</style>
