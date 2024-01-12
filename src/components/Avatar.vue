<script setup lang="ts">
  import Avatar from '@/assets/astarion.png';
  import { AvatarHealth, Selection } from '@/types/avatarTypes';
  import Skull from '@/assets/skull.png';
  import { computed } from 'vue';

  const props = defineProps<{
    health: AvatarHealth;
    selection: Selection;
    title: string;
  }>();

  const containerClass = computed(() => ({
    unselected: props.selection === Selection.none,
  }));

  const avatarClass = computed(() => {
    return {
      current: props.selection === Selection.current,
      selected: props.selection === Selection.selected,
    };
  });

  const healthGradientClass = computed(() => {
    return {
      'half-gradient': props.health === AvatarHealth.damaged,
      'full-gradient':
        props.health === AvatarHealth.nearlydead || props.health === AvatarHealth.dead,
    };
  });

  const skullClass = computed(() => {
    return { skull: props.health === AvatarHealth.dead };
  });
</script>

<template>
  <div class="avatar-container" :class="containerClass">
    <img :src="Avatar" :class="avatarClass" />

    <div :class="healthGradientClass"></div>

    <div :class="healthGradientClass"></div>

    <img v-if="props.health === AvatarHealth.dead" :src="Skull" :class="skullClass" />

    <div class="title">{{ props.title }}</div>
  </div>
</template>

<style scoped lang="scss">
  .current {
    outline: 2px solid #ffeb3b;
  }

  .selected {
    outline: 2px solid #2f69ff;
  }
  .avatar-container {
    //border: 2px solid red;
    width: 96px;
    height: 152px;
    position: relative;
    margin: 2px;

    &.unselected:hover {
      outline: 2px solid #5079ff;
    }
  }
  .half-gradient {
    width: 96px;
    height: 50%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, red 0%, transparent);
    opacity: 0.9;
  }

  .full-gradient {
    width: 96px;
    height: 152px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, red 0%, transparent);
    opacity: 0.9;
  }

  .skull {
    position: absolute;
    width: 96px;
    top: 50%;
    left: 50%;
    opacity: 60%;
    transform: translate(-50px, -50px);
  }

  .title {
    position: absolute;
    top: 0;
    right: 17px;
    color: white;
    font-size: 21px;
    font-family: 'Inter', sans-serif;
    line-height: 25.41px;
  }
</style>
