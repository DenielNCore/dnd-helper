<script setup lang="ts">
  import { CardSize } from '@/types/spellCard';

  const props = withDefaults(
    defineProps<{
      cardSize: CardSize;
    }>(),
    {
      cardSize: CardSize.Full,
    },
  );

  const emit = defineEmits<{
    (e: 'setSize', size: CardSize): void;
  }>();

  const click = (size: CardSize) => {
    emit('setSize', size);
  };

  const options = [
    { text: '0', value: CardSize.Full },
    { text: '1', value: CardSize.Row },
    { text: '2', value: CardSize.Icon },
  ];
</script>

<template>
  <div class="spell-card-size-container">
    <div
      v-for="option in options"
      :key="option.value"
      :class="{ selected: props.cardSize === option.value }"
      @click="() => click(option.value)"
    >
      {{ option.text }}
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

    > div {
      width: 20px;
      padding: 5px;
      text-align: center;

      &.selected {
        background-color: #f1f1f1;
      }
    }
  }
</style>
