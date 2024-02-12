<script setup lang="ts">
  import Avatar from '@/assets/astarion.png';
  import { AvatarHealth, Selection } from '@/types/avatarTypes';
  import Skull from '@/assets/skull.png';
  import { computed } from 'vue';

  const props = defineProps<{
    health: AvatarHealth;
    selection: Selection;
    title: string;
    isActive: boolean;
  }>();

  const containerClass = computed(() => ({
    unselected: props.selection === Selection.none,
  }));

  const avatarClass = computed(() => {
    return {
      'current-full': props.selection === Selection.current,
      selected: props.selection === Selection.selected,
    };
  });

  const healthGradientClass = computed(() => {
    return {
      'half-gradient': props.health === AvatarHealth.damaged,
      'full-gradient':
        props.health === AvatarHealth.nearlydead || props.health === AvatarHealth.dead,
      'half-gradient-current':
        props.selection === Selection.current && props.health === AvatarHealth.damaged,
      'full-gradient-current':
        props.selection === Selection.current &&
        (AvatarHealth.nearlydead || props.health === AvatarHealth.dead),
    };
  });

  const skullClass = computed(() => {
    return {
      skull: props.health === AvatarHealth.dead && props.selection !== Selection.current,
      'current-skull': props.selection === Selection.current && AvatarHealth.dead,
    };
  });

  const activeNotActive = computed(() => {
    return { grayLayer: props.isActive === true };
  });
</script>

<template>
  <div class="avatar-container" :class="containerClass">
    <img :src="Avatar" :class="avatarClass" />

    <div :class="healthGradientClass"></div>

    <div :class="healthGradientClass"></div>

    <div :class="activeNotActive"></div>

    <img v-if="props.health === AvatarHealth.dead" :src="Skull" :class="skullClass" />

    <div class="title">{{ props.title }}</div>
  </div>
</template>

<style scoped lang="scss">
  .grayLayer {
    width: 96px;
    height: 152px;
    filter: grayscale(100%);
    opacity: 65%;
    position: absolute;
    background-color: red;
    z-index: 1;
    bottom: 0;
  }

  .current-full {
    outline: 2px solid #ffeb3b;
    transform: scale(1.5);
  }

  .current-damaged {
    transform: scale(1.5);
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
    z-index: 0;
  }

  .half-gradient-current {
    width: 96px;
    height: 50%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, red 0%, transparent);
    opacity: 0.9;
    z-index: 0;
    transform: scale(1.5, 2);
  }
  .full-gradient {
    width: 96px;
    height: 152px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, red 0%, transparent);
    opacity: 0.9;
    z-index: 0;
  }

  .full-gradient-current {
    width: 96px;
    height: 152px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, red 0%, transparent);
    opacity: 0.9;
    z-index: 0;
    transform: scale(1.5);
  }

  .skull {
    position: absolute;
    width: 96px;
    top: 50%;
    left: 50%;
    opacity: 60%;
    transform: translate(-50px, -50px);
    z-index: 0;
  }
  .current-skull {
    position: absolute;
    width: 96px;
    top: 50%;
    left: 50%;
    opacity: 60%;
    transform: translate(-50px, -50px) scale(1.5);
    margin: auto;
    z-index: 0;
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
