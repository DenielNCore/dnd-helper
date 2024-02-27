<script setup lang="ts">
  import Avatar from '@/assets/astarion.png';
  import { AvatarHealth, Selection } from '@/types/avatarTypes';
  import Skull from '@/assets/skull.png';

  const props = defineProps<{
    health: AvatarHealth;
    selection: Selection;
    title: string;
    isActive: boolean;
  }>();
</script>

<template>
  <div
    class="avatar-container"
    :class="{
      unselected: props.selection === Selection.none,
      'avatar-container-current': props.selection === Selection.current,
      falling: props.health === AvatarHealth.dead,
      selected: props.selection === Selection.selected,
      grayLayer: props.isActive === true,
    }"
  >
    <img :src="Avatar" :class="{ 'current-full': props.selection === Selection.current }" />

    <div
      :class="{
        'half-gradient': props.health === AvatarHealth.damaged,
        'full-gradient':
          props.health === AvatarHealth.nearlydead || props.health === AvatarHealth.dead,
        'half-gradient-current':
          props.selection === Selection.current && props.health === AvatarHealth.damaged,
        'full-gradient-current':
          props.selection === Selection.current &&
          (props.health === AvatarHealth.nearlydead || props.health === AvatarHealth.dead),
      }"
    ></div>

    <img
      v-if="props.health === AvatarHealth.dead"
      :src="Skull"
      :class="{
        skull: props.health === AvatarHealth.dead && props.selection !== Selection.current,
        'current-skull':
          props.selection === Selection.current && props.health === AvatarHealth.dead,
      }"
    />

    <div class="title">{{ props.title }}</div>
  </div>
</template>

<style scoped lang="scss">
  .grayLayer {
    filter: grayscale(1);
    bottom: -2px;
  }

  .current-full {
    border: 2px solid #ffeb3b;
    width: 116px;
    height: 172px;
  }

  .selected {
    border: 2px solid #2f69ff;
  }
  .avatar-container {
    width: 96px;
    height: 152px;
    position: relative;

    &.unselected:hover {
      border: 2px solid #5079ff;
    }
  }

  .avatar-container-current {
    width: 116px;
    height: 172px;
    position: relative;
  }
  .half-gradient {
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, red 0%, transparent);
    opacity: 0.9;
    z-index: 0;
  }

  .half-gradient-current {
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 50%,
      rgba(255, 0, 0, 0) 50%,
      rgba(255, 0, 0, 1) 100%
    );
    opacity: 0.9;
    z-index: 0;
  }
  .full-gradient {
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, red 0%, transparent);
    opacity: 0.9;
    z-index: 0;
  }

  .full-gradient-current {
    width: 116px;
    height: 172px;
    position: absolute;
    bottom: -2px;
    left: 2px;
    background: linear-gradient(to top, red 0%, transparent);
    opacity: 0.9;
    z-index: 0;
  }

  .skull {
    position: absolute;
    width: 96px;
    top: 50%;
    left: 52%;
    opacity: 60%;
    transform: translate(-50px, -50px);
    z-index: 0;
  }
  .current-skull {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 45%;
    opacity: 60%;
    transform: translate(-50px, -50px);
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

  @keyframes falling {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(400px);
    }

    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY();
      opacity: 0;
    }
  }

  .falling {
    animation-name: falling;
    animation-duration: 5s;
    animation-fill-mode: forwards;
  }
</style>
