<script setup lang="ts">
  import Avatar from '@/assets/astarion.png';
  import { Health, selection } from '@/types/avatarTypes';
  import Skull from '@/assets/skull.png';

  const props = defineProps<{
    health: Health;
    selection: selection;
    title: string;
  }>();
</script>

<template>
  <div class="avatar-container" :class="{ unselected: props.selection === 'none' }">
    <img :src="Avatar" v-if="props.selection === selection.current" class="current" />
    <img :src="Avatar" v-if="props.selection === selection.selected" class="selected" />
    <img v-if="props.selection === selection.none" :src="Avatar" />

    <div v-if="props.health === Health.damaged" class="half-gradient"></div>

    <div
      v-if="props.health === Health.nearlydead || props.health === Health.dead"
      class="full-gradient"
    ></div>

    <img v-if="props.health === Health.dead" :src="Skull" class="skull" />

    <div class="title">{{ props.title }}</div>
  </div>
</template>

<style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

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
