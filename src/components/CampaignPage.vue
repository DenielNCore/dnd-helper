<script setup lang="ts">
  import { computed, Ref, ref, watch } from 'vue';
  import useCampaignsStore from '@/stores/campaignsStore';
  import CollectingDropdown from '@/components/CollectingDropdown.vue';
  import { Class, Experience } from '@/types/character';
  import { useLocalStorage } from '@vueuse/core';
  import useCharactersStore, { CharacterI } from '@/stores/charactersStore';
  import { getLvlUpString } from '@/utils';
  import { ClassesMap } from '@/SpellMapping';

  const campaignsStore = useCampaignsStore();
  const charactersStore = useCharactersStore();

  const selectedCampaign = ref(0);

  const selectedCampaignCharacters = computed(() => {
    return campaignsStore.campaigns[selectedCampaign.value]?.characters;
  });

  const characterNamesMap = computed(() => {
    return (
      selectedCampaignCharacters.value?.reduce((acc, character) => {
        acc[character.value.id] = character.value.name;
        return acc;
      }, {}) || {}
    );
  });

  // console.log(characterNamesMap.value);

  const selectedCharacters: Ref<Set<string>> = ref(new Set<string>());

  const addingAmount: Ref<number> = useLocalStorage('addingAmount', 0);
  const updateSelectedCharacters = (list: Array<string>) => {
    selectedCharacters.value.clear();

    list.forEach((char: string) => {
      selectedCharacters.value.add(char);
    });
  };

  const increase = () => {
    [...selectedCharacters.value].forEach((charId: string) => {
      charactersStore.increase(charId, addingAmount.value);
    });
  };

  const lockMaxExp = (e: Event) => {
    if (!e.target) return;

    e.target.value = Math.min(e.target.value, Experience.Twenty);
  };
</script>

<template>
  <div class="campaigns-page">
    <!--    {{ campaignsStore.campaigns }}-->
    <div v-for="campaign in campaignsStore.campaigns" :key="campaign.id">
      <div class="campaign-name">{{ campaign.name }}</div>
      <div v-for="character in campaign.characters" :key="character.value.id">
        <div class="character-name">{{ character.value.name }}</div>
        <div class="character-info">
          <div class="character-exp">{{ `Досвід: ${character.value.experience}` }}</div>
          <div class="character-lvl">
            {{ `Рівень: ${getLvlUpString(character.value.lvl, character.value.experience)}` }}
          </div>
          <div class="character-class">{{ `Клас: ${ClassesMap[character.value.class]}` }}</div>
        </div>
      </div>
    </div>

    <div class="settings-container">
      <div class="settings-title">Додати досвід</div>
      <CollectingDropdown
        v-if="Object.keys(characterNamesMap).length"
        :options-map="characterNamesMap"
        :selected-options="selectedCharacters"
        title="Кому"
        @update-selected="updateSelectedCharacters"
      />

      <div class="amount-container">
        <div class="amount-title">Кількість</div>
        <input
          v-model="addingAmount"
          class="amount-input"
          type="number"
          min="0"
          :max="Experience.Twenty"
          @input="lockMaxExp"
        />

        <div class="amount-btn" @click="increase">Додати</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .campaigns-page {
    padding: 24px;

    .campaign-name {
      width: 262px;
      height: 32px;
      padding: 2px 4px;
      vertical-align: center;
      margin-left: 4px;
      border-radius: 4px;
      background: linear-gradient(90deg, #dcdcdc, rgba(150, 150, 150, 0));
      margin-bottom: 16px;
      display: flex;
      //justify-content: center;
      padding-left: 8px;
      font-size: 20px;
      align-items: center;
    }

    .character-name {
      width: 262px;
      height: 20px;
      padding: 2px 4px;
      vertical-align: center;
      //margin-left: 4px;
      border-radius: 4px;
      background: linear-gradient(90deg, #dcdcdc, rgba(150, 150, 150, 0));
      margin-bottom: 16px;
      margin-left: 16px;
      display: flex;
      //justify-content: center;
      padding-left: 8px;
      font-size: 16px;
      align-items: center;
    }

    .character-info {
      margin-left: 24px;
      margin-bottom: 16px;

      > div {
        margin-bottom: 4px;
      }
    }
  }

  .settings-container {
    width: 354px;
    height: 300px;
    background: #f6f6f6;
    padding: 16px 32px;
    position: absolute;
    top: 64px;
    right: 64px;
    border-radius: 4px;
    box-shadow: inset 0 0 4px 0 #dcdcdc;

    .settings-title {
      width: 262px;
      height: 20px;
      padding: 2px 4px;
      vertical-align: center;
      margin-left: 4px;
      border-radius: 4px;
      background: linear-gradient(90deg, #dcdcdc, rgba(150, 150, 150, 0));
    }

    .amount-container {
      margin-top: 24px;
      margin-left: 8px;

      .amount-title {
        font-size: 14px;
        margin-bottom: 2px;
      }

      .amount-input {
        margin-bottom: 8px;
        width: 100px;
      }

      .amount-btn {
        width: 64px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        border: 1px solid black;

        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;

        &:active {
          transform: translateY(1px);
        }
      }
    }
  }
</style>
