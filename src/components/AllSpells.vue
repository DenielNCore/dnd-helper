<script setup lang="ts">
  // import CheckIcon from '@/assets/check.png';
  import SpellCard from '@/components/SpellCard.vue';
  import Filtering from '@/components/Filtering.vue';
  import SpellSizeSelector from '@/components/SpellSizeSelector.vue';
  import useAppStore from '@/stores/appStore';
  import useSpellFilteringStore from '@/stores/spellFilteringStore';
  import useSpellCardDesignStore from '@/stores/spellCardDesignStore';
  import { toRefs, ref, computed } from 'vue';
  import { CardSize } from '@/types/spellCard';
  import { useElementSize } from '@vueuse/core/index';

  const appStore = useAppStore();
  const { addSpell, removeSpell } = appStore;
  const { selectedSpells } = toRefs(appStore);

  const spellCardDesignStore = useSpellCardDesignStore();
  const { selectedSpellCardSize } = toRefs(spellCardDesignStore);
  const { setSpellCardSize } = spellCardDesignStore;

  const spellFilteringStore = useSpellFilteringStore();
  const { filteredSpellList } = toRefs(spellFilteringStore);

  const topBarRef = ref();
  const { height } = useElementSize(topBarRef);
  const topShift = computed(() => `${height.value}px`);
  const spellSizeShift = computed(() => `${height.value - 10}px`);
  const allSpellsHeight = computed(() => `${window.innerHeight - height.value}px`);

  // selectedSpells.value.includes();
</script>

<template>
  <div ref="topBarRef" class="top-bar">
    <Filtering />
  </div>
  <SpellSizeSelector
    class="top-shift-element"
    :card-size="selectedSpellCardSize"
    @set-size="setSpellCardSize"
  />

  <div class="all-spells">
    <div
      v-for="id in filteredSpellList"
      :key="id"
      class="card-container"
      :class="{
        'row-size': selectedSpellCardSize === CardSize.Row,
        'icon-size': selectedSpellCardSize === CardSize.Icon,
      }"
    >
      <SpellCard :id="id" :spell-card-size="selectedSpellCardSize" />
      <div v-if="!selectedSpells.has(id)" class="add-btn" @click="() => addSpell(id)">+</div>
      <div v-if="selectedSpells.has(id)" class="add-btn" @click="() => removeSpell(id)">-</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .top-bar {
    position: fixed;
    z-index: 2;
    width: 100%;
    background-color: white;
  }

  .top-shift-element {
    top: v-bind(spellSizeShift);
  }

  .all-spells {
    //top: v-bind(topShift);
    //height: v-bind(allSpellsHeight);
    //overflow: scroll;
    //position: fixed;
    display: flex;
    flex-wrap: wrap;
    //margin-top: v-bind(topShift);
    margin-left: 20px;
    margin-bottom: 50pxs;
    //padding-top: 30px;
    padding-top: v-bind(topShift);
    //padding-bottom: 100px;
  }
  .card-container {
    //position: relative;
    margin: 20px 10px;
    //margin-top: v-bind(topShift);

    display: flex;
    align-items: flex-start;

    .add-btn {
      background-color: #c0c0c0;
      border-radius: 5px;
      padding: 10px;
      margin-left: 5px;
      cursor: pointer;
    }

    &.row-size {
      margin: 10px;
    }
    &.icon-size {
      margin: 10px 5px;
    }
  }
</style>
