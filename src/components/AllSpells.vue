<script setup lang="ts">
  // import CheckIcon from '@/assets/check.png';
  import SpellCard from '@/components/SpellCard.vue';
  import Filtering from '@/components/Filtering.vue';
  import SpellSizeSelector from '@/components/SpellSizeSelector.vue';
  // import useAppStore from '@/stores/appStore';
  import useSpellFilteringStore from '@/stores/spellFilteringStore';
  import useSpellCardDesignStore from '@/stores/spellCardDesignStore';
  import { toRefs } from 'vue';
  import { CardSize } from '@/types/spellCard';

  // const appStore = useAppStore();
  // const { addSpell } = appStore;

  const spellCardDesignStore = useSpellCardDesignStore();
  const { selectedSpellCardSize } = toRefs(spellCardDesignStore);
  const { setSpellCardSize } = spellCardDesignStore;

  const spellFilteringStore = useSpellFilteringStore();
  const { filteredSpellList } = toRefs(spellFilteringStore);
</script>

<template>
  <Filtering />
  <SpellSizeSelector :card-size="selectedSpellCardSize" @set-size="setSpellCardSize" />

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
    </div>
  </div>
</template>

<style scoped lang="scss">
  .all-spells {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    margin-left: 20px;
  }
  .card-container {
    position: relative;
    margin: 20px 0;
    align-items: center;

    &.row-size {
      margin: 10px 0;
    }
    &.icon-size {
      margin: 10px 5px;
    }
  }
</style>
