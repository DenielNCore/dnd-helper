<script setup lang="ts">
  import { computed } from 'vue';
  import { ISpell } from '../SpellList';

  const props = defineProps<{ spell: ISpell }>();

  const comps = computed(() => Object.keys(props.spell.components).join(', ').toUpperCase());
  console.log(props.spell);
</script>

<template>
  <div class="card">
    <div class="spell-name">{{ spell.name }}</div>
    <div class="spell-level">{{ `Рівень ${spell.lvl} ${spell.school}` }}</div>
    <div class="info">
      <div class="cast-time">
        <div class="title">Час касту</div>
        <div class="content">{{ spell.actionType }}</div>
      </div>
      <div class="cast-range">
        <div class="title">Діапазон</div>
        <div class="content">{{ spell.distance }}</div>
      </div>
      <div class="components">
        <div class="title">Складові</div>
        <div class="content">{{ comps }}</div>
      </div>
      <div class="duration">
        <div class="title">Тривалість</div>
        <div class="content">{{ spell.duration }}</div>
      </div>
    </div>
    <div class="description-block">
      <div class="description">{{ spell.description }}</div>
    </div>
    <div class="class-list">Бард, Клірік, Воїн</div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    width: 300px;
    height: 500px;
    border-radius: 5px;
    background-color: indianred;
    margin: 10px;
    padding: 5px 5px 0 5px;
  }

  .spell-name {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    background-color: #f1d7af;
    border: 4px solid #f1d7af;
    border-radius: 4px;
  }
  .spell-level {
    font-size: 12px;
    font-weight: bold;
    font-style: italic;
    display: flex;
    justify-content: center;
  }

  .info {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    background-color: indianred;

    & > div {
      margin: 2px;
      //width: 135px;
      width: calc(50% - 12px);
      display: flex;
      flex-direction: column;
      align-items: center;

      background-color: #f1d7af;
      border: 4px solid #f1d7af;
      border-radius: 4px;
    }
  }

  .description-block {
    background-color: #f1d7af;
    //border: 4px solid #f1d7af;
    border-radius: 4px 4px 0 0;

    height: 350px;
  }

  .title {
    font-size: 12px;
    font-weight: bold;
  }
  .content {
    font-size: 10px;
  }

  .class-list {
    font-size: 12px;
  }
</style>
