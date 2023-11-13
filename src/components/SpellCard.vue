<script setup lang="ts">
  // import { ref } from 'vue'
  import { ISpell } from '../SpellList';

  const props = defineProps<{ spell: ISpell }>();
  console.log(props.spell);
</script>

<template>
  <div class="card">
    <div class="title">{{ spell.name }}</div>
    <div class="level">{{ `Рівень ${spell.lvl} ${spell.school}` }}</div>
    <div class="info">
      <div class="cast-time">{{ spell }}</div>
      <div class="cast-range"></div>
      <div class="components"></div>
      <div class="duration"></div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    width: 200px;
    height: 300px;
    border: 4px solid indianred;
    border-radius: 5px;
  }

  .info {
    display: flex;
  }
</style>
