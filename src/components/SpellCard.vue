<script setup lang="ts">
  import { computed } from 'vue';
  import { ISpell } from '../SpellList';

  const props = defineProps<{ spell: ISpell }>();

  const comps = computed(() => Object.keys(props.spell.components).join(', ').toUpperCase());
  console.log(props.spell);
</script>

<template>
  <div class="card">
    <div class="title">{{ spell.name }}</div>
    <div class="level">{{ `Рівень ${spell.lvl} ${spell.school}` }}</div>
    <div class="info">
      <div class="cast-time">{{ `Час касту ${spell.actionType}` }}</div>
      <div class="cast-range">{{ `Діапазон ${spell.distance}` }}</div>
      <div class="components">{{ `Складові ${comps}` }}</div>
      <div class="duration">{{ `Тривалість ${spell.duration}` }}</div>
    </div>
    <div class="description-block">
      <div class="description">{{ `Тривалість ${spell.description}` }}</div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    width: 300px;
    height: 300px;
    border: 4px solid indianred;
    border-radius: 5px;
    background-color: #f1d7af;
  }

  .info {
    width: 280px;
    display: flex;
    flex-wrap: wrap;

    & > div {
      width: 135px;

      border: 2px solid indianred;
    }
  }

  .description-block {
    border: 2px solid indianred;
  }
</style>
