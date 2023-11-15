<script setup lang="ts">
  withDefaults(
    defineProps<{
      isOpen: boolean;
    }>(),
    {
      isOpen: false,
    },
  );

  const emit = defineEmits(['handleClick']);
  const click = () => {
    emit('handleClick');
  };
</script>

<template>
  <div class="menu" :class="{ 'is-open': isOpen }">
    <router-link to="/dnd-helper/" @click="click">Книга заклять</router-link>
    <router-link to="/dnd-helper/all-spells" @click="click">Всі закляття</router-link>
    <router-link to="/dnd-helper/skills" @click="click">Вміння</router-link>
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

    a {
      font-weight: 800;
      font-size: 24px;
      width: 180px;
      height: 80px;
      background-color: white;
      //border: 1px solid green;
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
