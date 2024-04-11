<script setup lang="ts">
  import { AbilityType } from '@/types/abilityTypes';
  import Ability from '@/components/Ability.vue';
  import { computed, ref } from 'vue';

  const props = defineProps<{
    list: Array<{ type: AbilityType; amount: number }>;
  }>();

  const test = ref(10);
  const maxAvailablePoints = 27;
  const availablePoints = computed(() => {
    return maxAvailablePoints;
  });

  // const handleCountChange = (newCount: number) => {
  //   // Update the points value based on the new count value
  //   if (newCount > 13) {
  //     points.value -= 2;
  //   } else {
  //     points.value--;
  //   }
  // };

  // const decrementPoints = () => {
  //   points.value++;
  // };

  console.log(props.list);
</script>

<template>
  <div>
    <div class="ability-points-container">
      <div>AbilityType Points</div>
      <div>Proficiency Bonus: +2</div>
      <div>
        <div>AbilityType Points</div>
        <div>{{ test }}</div>
      </div>
    </div>

    <div class="all-abilities-container">
      <div class="title-container">
        <div v-for="(ability, index) in list" :key="index">
          <Ability :test="ability.amount" v-model="test" :type="ability.type" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .all-abilities-container {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
  }

  .title {
    //background-color: red;
    width: 50px;
    height: 50px;
  }

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .plus-minus-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100px;
    height: 20px;
  }
</style>
