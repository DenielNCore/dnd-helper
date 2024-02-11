<script setup lang="ts">
  import { computed, ComputedRef, Ref, ref, watch } from 'vue';
  import useCampaignsStore, { CampaignI } from '@/stores/campaignsStore';
  import CollectingDropdown from '@/components/CollectingDropdown.vue';
  import LoadingAnimation from '@/components/LoadingAnimation.vue';
  import { Class, Experience } from '@/types/character';
  import { useLocalStorage } from '@vueuse/core';
  import useCharactersStore, { CharacterI } from '@/stores/charactersStore';
  import { getLvlUpString } from '@/utils';
  import { ClassesMap } from '@/SpellMapping';

  const campaignsStore = useCampaignsStore();
  const charactersStore = useCharactersStore();

  const selectedCampaignIndex = 0;

  const isLoading = ref(false);
  // TODO: move loading to store and animation at root or forground layer

  const selectedCampaign = computed(() => {
    return campaignsStore.campaigns[selectedCampaignIndex];
  });

  const selectedCampaignCharacters = computed(() => {
    // console.log(campaignsStore.campaigns[selectedCampaignIndex]);
    return selectedCampaign.value?.characters || [];
  });

  const characterNamesMap = computed(() => {
    return (
      selectedCampaignCharacters.value?.reduce((acc, character) => {
        acc[character.value.id] = character.value.name;
        return acc;
      }, {}) || {}
    );
  });

  const comment = ref('');

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
    isLoading.value = true;
    const promises = campaignsStore.addExperience(selectedCampaign.value.id, {
      ids: [...selectedCharacters.value],
      value: addingAmount.value,
      comment: comment.value,
    });

    Promise.all(promises).then(e => {
      isLoading.value = false;
    });
  };

  const lockMaxExp = (e: Event) => {
    if (!e.target) return;

    // @ts-ignore
    e.target.value = Math.min(e.target.value, Experience.Twenty);
  };

  const factIsOpen = ref(false);
  const toggleFact = () => {
    factIsOpen.value = !factIsOpen.value;
  };
</script>

<template>
  <div class="campaigns-page">
    <LoadingAnimation v-if="isLoading" />
    <!--    {{ campaignsStore.campaigns }}-->
    <div v-for="campaign in campaignsStore.campaigns" :key="campaign.id">
      <div class="campaign-name">{{ campaign.name }}</div>
      <!--      <CampaignCharacter v-for="character in campaign.characters" :character="character.value" />-->
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

      <div class="fact-container">
        <div class="fact-title-container">
          <div>Літопис</div>

          <div class="btn fact-toggle-btn" @click="toggleFact" v-if="factIsOpen">-</div>
          <div class="btn fact-toggle-btn" @click="toggleFact" v-else>+</div>
        </div>
        <div
          :class="{
            hide: !factIsOpen,
          }"
          class="fact"
          v-for="fact in campaign.history"
        >
          <div class="fact-char-name-container">
            <div
              class="fact-char-name"
              v-for="ch in fact.ids.map(pid => characterNamesMap[pid])"
              :key="ch"
            >
              {{ ch }}
            </div>
          </div>
          <div>Кількість досвіду: {{ fact.value }}</div>
          <div v-if="fact.comment">За {{ fact.comment }}</div>
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

      <div class="comment-container">
        <div>Коментар до отриманого досвіду</div>
        <input v-model="comment" />
      </div>

      <div class="amount-container">
        <div class="amount-title">Кількість</div>
        <input
          v-model="addingAmount"
          class="amount-input"
          type="number"
          :min="-Experience.Twenty"
          :max="Experience.Twenty"
          @input="lockMaxExp"
        />

        <div class="amount-btn btn" @click="increase">Додати</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .btn {
    cursor: pointer;

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

  .hide {
    display: none;
  }
  .campaigns-page {
    padding: 24px;

    .fact-container {
      margin-left: 16px;

      .fact-title-container {
        display: flex;
        margin-bottom: 8px;
        align-items: baseline;
        justify-content: flex-start;

        .fact-toggle-btn {
          width: 20px;
          height: 20px;
          margin-bottom: 8px;
          margin-left: 8px;
        }
      }

      .fact {
        background: linear-gradient(90deg, #dcdcdc, rgba(150, 150, 150, 0));
        padding: 8px;

        margin-bottom: 16px;

        .fact-char-name-container {
          display: flex;

          .fact-char-name {
            margin-right: 4px;
            background: #a0a0a0;
            width: fit-content;
            padding: 2px;
            border-radius: 4px;
          }
        }
      }
    }

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

    .comment-container {
      margin-top: 24px;
      margin-left: 8px;
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
      }
    }
  }
</style>
