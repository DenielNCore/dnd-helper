<script setup lang="ts">
  import { computed, ComputedRef, ref } from 'vue';
  import ConcentrationIcon from '@/assets/concentration.png';
  import RitualIcon from '@/assets/ritual.png';
  import ActionIcon from '@/assets/action.png';
  import BonusActionIcon from '@/assets/bonus-action.png';
  import ReactionIcon from '@/assets/reaction.png';
  import DurationIcon from '@/assets/duration.png';
  import DiamondIcon from '@/assets/diamond.png';
  import { Action, ISpell } from '@/types/spell';
  import spells from '@/spells/description';
  import Spell from '@/spells/list';
  import { ActionMap, SchoolsMap, LvlMap } from '@/SpellMapping';
  import { convertDistanceToText, convertTimeToText, getClassList } from '@/utils';
  import { CardSize } from '@/types/spellCard';
  import SpellIcon from '@/components/SpellIcon.vue';

  const props = defineProps<{ id: Spell; spellCardSize: CardSize }>();

  const isOpen = ref(false);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };
  const size = computed(() => (isOpen.value ? CardSize.Full : props.spellCardSize));
  const spell: ComputedRef<ISpell> = computed(() => spells[props.id]!);
  // const spellIcon = computed(() => getSpellImgUrl(props.id));
  const actionIconUrl = computed(() => {
    switch (Action[spell.value.actionType]) {
      case Action.Action:
        return ActionIcon;
      case Action.BonusAction:
        return BonusActionIcon;
      case Action.LongTerm:
        return DurationIcon;
      case Action.Reaction:
        return ReactionIcon;

      default:
        return '';
    }
  });

  const actionTitle = computed(() => {
    switch (Action[spell.value.actionType]) {
      case Action.Action:
        return ActionMap[Action.Action];
      case Action.BonusAction:
        return ActionMap[Action.BonusAction];
      case Action.Reaction:
        return ActionMap[Action.Reaction];

      default:
        return '';
    }
  });

  const duration = computed(() =>
    convertTimeToText(spell.value.duration, spell.value.canEndEarlier),
  );
  const comps = computed(() =>
    Object.keys(spell.value.components)
      .filter(comp => spell.value.components[comp])
      .join(', ')
      .toUpperCase(),
  );

  const titleFontSize = computed(() => (spell.value.name.length > 22 ? '14px' : '18px'));
</script>

<template>
  <div class="card" :class="{ hide: size === CardSize.Icon }" @click="toggle">
    <div class="spell-title">
      <!--      <img class="spell-icon" :src="spellIcon" />-->
      <SpellIcon class="spell-icon" :type="id" />
      <div class="spell-level-small" :class="{ hide: size !== CardSize.Full }">
        {{ spell.lvl }}
      </div>
      <div class="spell-name" :class="{ hide: size === CardSize.Icon }">
        {{ spell.name }}
      </div>
    </div>
    <div class="spell-level" :class="{ hide: size !== CardSize.Full }">
      {{ `${spell.lvl ? 'Рівень ' : ''}${LvlMap[spell.lvl]} ${SchoolsMap[spell.school]}` }}
    </div>

    <div class="spell-content" :class="{ hide: size !== CardSize.Full }">
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
        <div v-if="spell.reactionCondition" class="reaction-info">
          <img :src="ReactionIcon" />
          <span>{{ spell.reactionCondition }}</span>
        </div>

        <div v-if="Array.isArray(spell.description)">
          <div v-for="description in spell.description" :key="description" class="description">
            {{ description }}
          </div>
        </div>
        <div v-else class="description">{{ spell.description }}</div>
        <div v-if="spell.components.m" class="material-component">
          <img :src="DiamondIcon" />
          <span><strong>Матеріальна складова: </strong>{{ spell.components.m }}</span>
        </div>
      </div>
      <div class="class-list">{{ getClassList(id) }}</div>
    </div>
    <!--    <img class="spell-icon-bottom" :src="spellIcon" />-->
  </div>
</template>

<style scoped lang="scss">
  $bg-color: #f1d7af;
  $border-color: indianred;
  $class-list-color: #1c1c1c;

  .card {
    width: 300px;
    border-radius: 5px;
    border: 3px solid $border-color;
    background-color: $border-color;
    //margin: 20px 0;
    position: relative;
    overflow: hidden;
    transition: width 1s;

    cursor: pointer;
    &.hide {
      width: 26px;
      transition: width 1s;
    }

    .spell-name {
      width: 340px;
      height: 18px;
      display: flex;
      justify-content: center;
      overflow: hidden;
      transition: width 1s;

      &.hide {
        width: 0;
        transition: width 1s;
      }
    }

    .spell-content {
      height: 459px;
      overflow: hidden;
      transition: height 1s;

      &.hide {
        transition: height 1s;
        height: 0;
      }
    }
  }

  .spell-title {
    font-size: v-bind(titleFontSize);
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $bg-color;
    border: 4px solid $bg-color;
    border-radius: 4px;
    position: relative;

    .spell-level-small {
      background-color: $class-list-color;
      text-align: center;
      width: 6px;
      border-radius: 2px;
      color: white;
      position: absolute;
      font-size: 10px;
      font-weight: 400;
      right: -4px;
      top: -4px;
      opacity: 0;
      transition: opacity 1s;

      &.hide {
        transition: opacity 1s;
        opacity: 1;
      }
    }
  }
  .spell-level {
    position: relative;
    font-size: 12px;
    font-weight: bold;
    font-style: italic;
    display: flex;
    justify-content: center;

    height: 12px;
    transition: height 1s;

    &.hide {
      transition: height 1s;
      height: 0;
    }
  }

  .info {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: $border-color;

    & > div {
      margin: 2px;
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
    font-size: 14px;
    overflow: scroll;
    padding: 10px;
    margin: 2px 2px 0 2px;
    background-color: $bg-color;
    border-radius: 4px 4px 0 0;
    height: 340px;

    position: relative;

    .description {
      margin-bottom: 4px;
    }

    .material-component,
    .reaction-info {
      display: flex;
      align-items: center;
      font-size: 12px;
      background-color: bisque;
      border-radius: 8px;
      padding: 2px 4px;
      margin: 15px 0;
      bottom: 4px;
      width: 260px;

      img {
        padding-right: 4px;
        width: 24px;
      }

      span {
        strong {
          font-weight: 800;
        }
      }
    }

    .reaction-info {
      margin: 0 0 10px 0;
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

    img {
      width: 25px;
    }
  }

  .class-list {
    font-size: 12px;
    color: $class-list-color;
    padding: 2px 0 0 3px;
  }

  .spell-icon {
    position: absolute;
    left: -4px;
    width: 26px;
    border-radius: 4px;
  }
  .concentration-img {
    position: absolute;
    right: 4px;
    width: 20px;
  }
  .ritual {
    position: absolute;
    left: 5px;
    font-size: 10px;
    font-style: italic;
  }
</style>
