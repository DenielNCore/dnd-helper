<script setup lang="ts">
  import { ref, defineProps, defineModel } from 'vue';
  import { AbilityType } from '@/types/abilityTypes';

  const props = defineProps({
    div1Text: String,
    type: String,
    test: Number,
  });

  const amount = defineModel<number>('amount', { default: 0 });
  console.log(amount, props.test);

  //const count = ref(8);

  const handleClick = (index: number) => {
    console.log(`Div ${index + 1} clicked`);
  };

  // const increment = () => {
  //   if (count.value >= 13) {
  //     count.value += 2;
  //   } else {
  //     count.value++;
  //   }
  //   emits('countChanged', count.value);
  // };

  // const decrement = () => {
  //   if (count.value > 8) {
  //     count.value--;
  //     emits('decrement');
  //   }
  // };

  //const emits = defineEmits(['countChanged', 'decrement']);
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col" @click="handleClick(0)">{{ div1Text }}</div>
      <div class="col" @click="handleClick(1)">{{ type }}</div>
      <div class="col minus">-</div>
      <div class="col">{{ amount }}</div>
      <div class="col plus">+</div>
    </div>
  </div>
</template>

<style>
  .container {
    width: 100%;
    max-width: 1200px; /* Adjust as needed */
    margin: 0 auto;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }

  .col {
    flex: 1;
    border: 1px solid #000;
    padding: 10px;
    text-align: center;
    cursor: pointer;
  }

  .col:hover {
    background-color: #f0f0f0;
  }

  .minus,
  .plus {
    cursor: pointer;
  }
</style>
