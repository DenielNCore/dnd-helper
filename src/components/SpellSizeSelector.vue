<script setup lang="ts">
  import { ref } from 'vue';
  import { CardSize } from '@/types/spellCard';
  import { Type } from '@/types/iconTypes';
  import { onClickOutside } from '@vueuse/core/index';
  import SVGIcon from './SVGIcon.vue';

  defineProps<{
    cardSize: CardSize;
  }>();

  const isOpen = ref(false);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  const close = () => {
    isOpen.value = false;
  };

  const emit = defineEmits<{
    (e: 'setSize', size: CardSize): void;
  }>();

  const click = (size: CardSize) => {
    emit('setSize', size);
  };

  const options = [
    { type: Type.clipboard, value: CardSize.Full },
    { type: Type.listUl, value: CardSize.Row },
    { type: Type.tableCells, value: CardSize.Icon },
  ];

  const containerRef = ref();
  onClickOutside(containerRef, close);
</script>

<template>
  <div ref="containerRef" class="spell-card-size-container">
    <div class="btn-container" :class="{ open: isOpen }">
      <div
        v-for="option in options"
        :key="option.type"
        :class="{ selected: cardSize === option.value }"
      >
        <SVGIcon :type="option.type" @click="() => click(option.value)" />
      </div>
    </div>

    <div v-if="!isOpen" class="open-select" @click="toggle">{{ `<` }}</div>
    <div v-if="isOpen" class="open-select" @click="toggle">{{ `>` }}</div>
  </div>
</template>

<style scoped lang="scss">
  .spell-card-size-container {
    z-index: 3;
    //padding: 5px 10px;
    position: fixed;
    width: 100%;
    height: 50px;
    overflow: hidden;
    //left: 30px;
    //background-color: red;
    .btn-container {
      display: flex;
      position: absolute;
      //background-color: blue;
      //width: fit-content;
      right: -60px;

      transition: right 0.7s;

      //left: -29px;
      &.open {
        right: 30px;
        transition: right 0.7s;
      }

      div {
        width: 20px;
        padding: 5px;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;

        &.selected {
          background-color: #ddd;
        }
      }
    }
  }

  .open-select {
    //width: 30px;
    cursor: pointer;

    background-color: #ddd;
    position: absolute;

    //cursor: pointer;
    width: 20px;
    height: 20px;
    padding: 5px;
    right: 0;
    //position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
