<script setup lang="ts">
  import { computed } from 'vue';
  import ConcentrationIcon from '@/assets/concentration.png';
  import RitualIcon from '@/assets/ritual.png';
  import ActionIcon from '@/assets/action.png';
  import BonusActionIcon from '@/assets/bonus-action.png';
  import DurationIcon from '@/assets/duration.png';
  // import LogsIcon from '@/assets/logs.png';
  import DiamondIcon from '@/assets/diamond.png';
  import { Spell, Action, spells } from '@/SpellList';
  import getSpellImgUrl from '@/SpellIcon';
  import { convertTimeToText, convertDistanceToText, getClassList } from '@/utils.ts';
  // import useAppStore from '@/stores/appStore';

  const props = defineProps<{ id: Spell }>();

  const spell = computed(() => spells[props.id]);
  const spellIcon = computed(() => getSpellImgUrl(props.id));
  const actionIconUrl = computed(() => {
    switch (Action[spell.value.actionType]) {
      case Action.Action:
        return ActionIcon;
      case Action.BonusAction:
        return BonusActionIcon;
      case Action.LongTerm:
        return DurationIcon;

      default:
        return '';
    }
  });

  const actionTitle = computed(() => {
    switch (Action[spell.value.actionType]) {
      case Action.Action:
        return 'Дія';
      case Action.BonusAction:
        return 'Додаткова дія';

      default:
        return '';
    }
  });

  const duration = computed(() =>
    convertTimeToText(spell.value.duration, spell.value.concentration),
  );
  const comps = computed(() => Object.keys(spell.value.components).join(', ').toUpperCase());

  // const select = () => {
  //   //
  // };
  // useAppStore
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
        <div class="title">Час виконання</div>
        <div v-if="!spell.castTime" class="content">
          <img :src="actionIconUrl" />{{ actionTitle }}
        </div>
        <div v-if="spell.castTime" class="content">
          <img :src="actionIconUrl" />{{ convertTimeToText(spell.castTime) }}
        </div>
        <!--        <div class="content">{{ spell.actionType }}</div>-->
        <img v-if="spell.ritual" class="ritual" :src="RitualIcon" />
      </div>
      <div class="cast-range">
        <div class="title">Дистанція</div>
        <div class="content">{{ convertDistanceToText(spell.distance) }}</div>
      </div>
      <div class="components">
        <div class="title">Складові</div>
        <div class="content">{{ comps }}</div>
      </div>
      <div class="duration">
        <div class="title">Тривалість</div>
        <div class="content">{{ duration }}</div>
        <img v-if="spell.concentration" class="concentration-img" :src="ConcentrationIcon" />
      </div>
    </div>
    <div class="description-block">
      <div class="description">{{ spell.description }}</div>
      <div v-if="spell.components.m" class="material-component">
        <img :src="DiamondIcon" />
        <span><strong>Матеріальна складова: </strong>{{ spell.components.m }}</span>
      </div>
    </div>
    <div class="class-list">{{ getClassList(id) }}</div>
    <img class="spell-icon-bottom" :src="spellIcon" />
  </div>
</template>

<style scoped lang="scss">
  //$bg-color: red;

  $bg-color: #f1d7af;
  //$border-color: #4b3b2f;
  $border-color: indianred;

  $class-list-color: #1c1c1c;
  //$class-list-color: #e87a09;

  .card {
    width: 300px;
    height: 500px;
    border-radius: 5px;
    background-color: $border-color;
    margin: 20px 0;
    padding: 5px 5px 0 5px;

    position: relative;
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

    background-color: $border-color;

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
    //line-height: 14px;
    font-size: 14px;

    overflow: scroll;
    padding: 10px;
    margin: 2px 2px 0 2px;
    background-color: $bg-color;
    //border: 4px solid #f1d7af;
    border-radius: 4px 4px 0 0;

    height: 340px;

    position: relative;
    .material-component {
      display: flex;
      align-items: center;
      //line-height: 12px;
      font-size: 12px;
      background-color: bisque;
      border-radius: 8px;
      padding: 2px 4px;
      margin: 15px 0;

      //position: absolute;
      bottom: 4px;
      width: 260px;
      img {
        padding-right: 4px;
      }

      span {
        strong {
          font-weight: 800;
        }
      }
    }
  }

  .title {
    font-size: 12px;
    font-weight: bold;
  }
  .content {
    font-size: 10px;
    display: flex;
    align-items: center;
  }

  .class-list {
    font-size: 12px;
    color: $class-list-color;
    //display: flex;
    padding: 2px 0 0 3px;
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

  .spell-icon-bottom {
    position: absolute;
    bottom: 20px;
    right: 10px;

    width: 30px;
    border-radius: 50%;
    //border-radius: 4px 0 0 4px;
  }
</style>
