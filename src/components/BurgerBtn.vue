<script setup lang="ts">
  const props = withDefaults(
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
  <div class="menu-btn" :class="{ open: props.isOpen }" @click="click">
    <div class="menu-btn__burger"></div>
  </div>
</template>

<style scoped lang="scss">
  .menu-btn {
    background-color: #383e46;
    border-radius: 50%;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    overflow: hidden;

    transform: rotate(180deg);
  }
  .menu-btn__burger {
    width: 12px;
    height: 1.5px;
    background: #fff;
    border-radius: 5px;

    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 1.5px;
    background: #fff;
    border-radius: 5px;

    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before {
    transform: translateY(-5px);
  }
  .menu-btn__burger::after {
    transform: translateY(5px);
  }
  /* ANIMATION */
  .menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }
  .menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
  }
  .menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
  }
</style>
