<script setup lang="ts">
  import useAppStore, { Route } from '@/stores/appStore';

  withDefaults(
    defineProps<{
      isOpen: boolean;
    }>(),
    {
      isOpen: false,
    },
  );

  const appStore = useAppStore();

  const openAllSpells = () => {
    appStore.setRoute(Route.AllSpells);
    appStore.closeMenu();
  };
  const openMySpells = () => {
    appStore.setRoute(Route.MySpells);
    appStore.closeMenu();
  };
  const openSkills = () => {
    appStore.setRoute(Route.Skills);
    appStore.closeMenu();
  };
</script>

<template>
  <div class="menu" :class="{ 'is-open': isOpen }" data-testid="side-menu">
    <div @click="openMySpells" data-testid="my-spells-tab">Книга заклять</div>
    <div @click="openAllSpells" data-testid="all-spells-tab">Всі закляття</div>
    <div @click="openSkills" data-testid="skills-tab">Вміння</div>
  </div>
</template>

<style scoped lang="scss">
  .menu {
    z-index: 2;
    width: 200px;
    height: 100%;
    //background-color: red;
    position: fixed;
    right: -200px;

    top: 0;
    transition: right 0.7s ease;

    display: flex;
    flex-direction: column;
    justify-content: center;

    &.is-open {
      right: 0;

      transition: right 0.7s ease;
    }

    div {
      cursor: pointer;
      font-weight: 800;
      font-size: 24px;
      width: 180px;
      height: 80px;
      background-color: white;

      border-radius: 10px;
      margin: 30px 10px;

      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: black;
    }

    a:visited {
      color: black;
    }
  }
</style>
