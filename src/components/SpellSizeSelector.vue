<script setup lang="ts">
  import { CardSize } from '@/types/spellCard';
  import { Type } from '@/types/iconTypes';
  import SVGIcon from './SVGIcon.vue';

  defineProps<{
    cardSize: CardSize;
  }>();

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
</script>

<template>
  <div class="spell-card-size-container">
    <div
      v-for="option in options"
      :key="option.type"
      :class="{ selected: cardSize === option.value }"
    >
      <SVGIcon :type="option.type" @click="() => click(option.value)" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .spell-card-size-container {
    z-index: 2;
    padding: 5px 10px;
    right: 0;
    position: absolute;
    display: flex;

    div {
      width: 20px;
      padding: 5px;
      text-align: center;
      border-radius: 5px;

      &.selected {
        background-color: #f1f1f1;
      }
    }
  }
</style>
