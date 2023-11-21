import { defineStore } from 'pinia';
import { computed, ComputedRef, Ref, ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { Class, Spell, spells, ClassSpells } from '@/SpellList';

const useSpellFilteringStore = defineStore('spellFiltering', () => {
  // useLocalStorage for storing all filtering in local storage
  const selectedClasses: Ref<Array<Class>> = ref(useLocalStorage('selectedCLass', []).value);

  const allSpellNames: ComputedRef<Array<Spell>> = computed(
    () =>
      Object.keys(spells).sort((a: string, b: string) => spells[a].lvl - spells[b].lvl) as Spell[],
  );

  const filteredSpellList: ComputedRef<Array<Spell>> = computed(() => {
    if (!selectedClasses.value.length) return allSpellNames.value;

    return allSpellNames.value.filter((sp: Spell) => {
      return selectedClasses.value.some((selClass: Class) => {
        return ClassSpells[selClass].includes(sp);
      });
    });
  });
  const toggleClass = (name: Class) => {
    const index = selectedClasses.value.indexOf(name);

    if (index >= 0) {
      selectedClasses.value.splice(index, 1);
    } else {
      selectedClasses.value.push(name);
    }
  };

  const clearClass = () => {
    selectedClasses.value.length = 0;
  };
  return {
    selectedClasses,
    filteredSpellList,

    toggleClass,
    clearClass,
  };
});

export default useSpellFilteringStore;
