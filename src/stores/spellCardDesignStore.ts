import { defineStore } from 'pinia';
import { ref } from 'vue';
import { CardSize } from '@/types/spellCard';

const useAppStore = defineStore('spellCardDesign', () => {
  const selectedSpellCardSize = ref(CardSize.Full);

  const setSpellCardSize = (size: CardSize) => {
    selectedSpellCardSize.value = size;
  };

  return {
    selectedSpellCardSize,

    setSpellCardSize,
  };
});

export default useAppStore;
