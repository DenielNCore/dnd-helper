<script setup lang="ts">
  import useAppStore, { Route } from '@/stores/appStore';
  import { toRefs } from 'vue';
  import SpellCard from '@/components/SpellCard.vue';
  import { Spell } from '@/SpellList';

  // withDefaults(
  //   defineProps<{
  //     isOpen: boolean;
  //   }>(),
  //   {
  //     isOpen: false,
  //   },
  // );
  const appStore = useAppStore();
  const { selectedSpells } = toRefs(appStore);

  if (!selectedSpells.value.length) {
    appStore.setRoute(Route.AllSpells);

    console.info('redirected to spell list');
  }
  const removeSpell = (id: Spell) => {
    appStore.removeSpell(id);

    if (!selectedSpells.value.length) {
      appStore.setRoute(Route.AllSpells);

      console.warn('redirected to spell list');
    }
  };
</script>

<template>
  <div v-for="id in selectedSpells" :key="id" class="card-container">
    <SpellCard :id="id" />

    <div
      v-if="appStore.selectedSpells.includes(id)"
      class="remove-btn"
      @click="() => removeSpell(id)"
    >
      Прибрати
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card-container {
    position: relative;
    width: 350px;
    margin-left: 20px;
    display: flex;
    align-items: center;

    .check-added {
      position: absolute;
      top: 20px;
      right: 5px;
    }
    .remove-btn {
      cursor: pointer;
      width: 40px;
      height: 200px;
      font-size: 26px;
      background-color: #ccc;
      border-radius: 0 10px 10px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      writing-mode: vertical-rl;
    }
  }
</style>
