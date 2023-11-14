<script setup lang="ts">
  import { computed } from 'vue';
  import ConcentrationIcon from '@/assets/concentration.png';
  import RitualIcon from '@/assets/ritual.png';
  import { ISpell, Spell } from '@/SpellList';
  import getImgUrl from '@/SpellIcon';

  const props = defineProps<{ spell: ISpell; id: Spell }>();

  const spellIcon = computed(() => getImgUrl(props.id));
  const comps = computed(() => Object.keys(props.spell.components).join(', ').toUpperCase());
</script>

<template>
  <div class="card">
    <div class="spell-name">
      {{ spell.name }}
      <img class="spell-icon" :src="spellIcon" />
    </div>
    <div class="spell-level">
      {{ `Рівень ${spell.lvl} ${spell.school}` }}
    </div>
    <div class="info">
      <div class="cast-time">
        <div class="title">Час касту</div>
        <div class="content">{{ spell.actionType }}</div>
        <img v-if="spell.ritual" class="ritual" :src="RitualIcon" />
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
        <img v-if="spell.concentration" class="concentration-img" :src="ConcentrationIcon" />
      </div>
    </div>
    <div class="description-block">
      <div class="description">{{ spell.description }}</div>
    </div>
    <div class="class-list">Бард, Клірік, Воїн</div>
  </div>
</template>

<style scoped lang="scss">
  //$bg-color: #3a2b24;
  $bg-color: #f1d7af;

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
    align-items: center;

    background-color: $bg-color;
    border: 4px solid $bg-color;
    border-radius: 4px;
    position: relative;
  }
  .spell-level {
    position: relative;

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
      justify-content: center;

      background-color: $bg-color;
      border: 4px solid $bg-color;
      border-radius: 4px;

      position: relative;
    }
  }

  .description-block {
    padding: 5px;
    margin: 2px 2px 0 2px;
    background-color: $bg-color;
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

  .spell-icon {
    position: absolute;
    left: -4px;
    width: 30px;
    border-radius: 4px 0 0 4px;
  }
  .concentration-img {
    position: absolute;
    right: 4px;
    width: 20px;
    //border-radius: 0 4px 4px 0;
  }
  .ritual {
    position: absolute;
    left: 5px;
    font-size: 10px;
    font-style: italic;
  }
</style>
