<script setup lang="ts">
  import CheckIcon from '@/assets/check.png';
  import SpellCard from '@/components/SpellCard.vue';
  import { Spell, spells } from '@/SpellList';
  import useAppStore from '@/stores/appStore';
  import '@/style.css';
  import 'reset-css';

  const appStore = useAppStore();

  const list: Spell[] = Object.keys(spells) as Spell[];

  const addSpell = (id: Spell) => {
    appStore.addSpell(id);
  };
</script>

<template>
  <div class="all-spells">
    <div v-for="id in list" :key="id" class="card-container">
      <SpellCard :id="id" />
      <div v-if="appStore.selectedSpells.includes(id)" class="check-added">
        <img :src="CheckIcon" />
      </div>
      <div v-if="!appStore.selectedSpells.includes(id)" class="add-btn" @click="() => addSpell(id)">
        Додати
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .all-spells {
    display: flex;
    flex-wrap: wrap;
  }
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
    .add-btn {
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
