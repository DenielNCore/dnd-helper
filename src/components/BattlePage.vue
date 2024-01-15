<script setup lang="ts">
  // withDefaults(
  //   defineProps<{
  //     isOpen: boolean;
  //   }>(),
  //   {
  //     isOpen: false,
  //   },
  // );
</script>

<template>
  <div class="battle-page">
    <div class="character-queue">aaa</div>
    <div class="current-character">bbb</div>
    <div class="selected-character">ccc</div>
    <div class="dead-list">ddd</div>
  </div>
</template>

<style scoped lang="scss">
  .battle-page {
    padding: 64px 32px;
    //background: red;
    //min-height: 100%;

    //display: grid;
    //grid-template-rows: auto;
    ////grid-template-columns: 50px 50px 50px 50px;
    //gap: 10px;

    //grid-template-areas:
    //  'header header header header'
    //  'current selected . dead';

    .character-queue {
      background: #404040;
      height: 100px;

      //grid-area: header;
    }

    .current-character {
      background: #606060;
      height: 100px;

      //grid-area: current;
    }
    .selected-character {
      background: #808080;
      height: 100px;

      //grid-area: selected;
    }
    .dead-list {
      background: #a0a0a0;
      height: 100px;
      //grid-area: dead;
    }
  }
</style>
