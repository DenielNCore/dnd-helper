import { defineStore } from 'pinia';
import { computed, ComputedRef, Ref, ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { Lvl, Class, Spell } from '@/types/spell';
import { spells, ClassSpells } from '@/SpellList';

interface SpellFilterFnI {
  (list: Spell[]): Spell[];
}

const useSpellFilteringStore = defineStore('spellFiltering', () => {
  // useLocalStorage for storing all filtering in local storage
  const selectedClasses: Ref<Array<Class>> = ref(useLocalStorage('selectedCLass', []).value);
  const selectedLvls: Ref<Array<number>> = ref(useLocalStorage('selectedLvl', []).value);

  const allSpellNames: ComputedRef<Array<Spell>> = computed(
    () =>
      Object.keys(spells).sort((a: string, b: string) => spells[a].lvl - spells[b].lvl) as Spell[],
  );

  const classFilteredSpellList: ComputedRef<Array<Spell>> = computed(() => {
    if (!selectedClasses.value.length) return allSpellNames.value;

    return allSpellNames.value.filter((sp: Spell) => {
      return selectedClasses.value.some((selClass: Class) => {
        return ClassSpells[selClass].includes(sp);
      });
    });
  });

  const lvlFilter: SpellFilterFnI = list => {
    if (!selectedLvls.value.length) return list;

    return list.filter((sp: Spell) => {
      return selectedLvls.value.includes(spells[sp].lvl);
    });
  };

  const filteredSpellList: ComputedRef<Array<Spell>> = computed(() => {
    const list = [...classFilteredSpellList.value];

    const filterFnList: Array<SpellFilterFnI> = [lvlFilter];

    return filterFnList.reduce((acc: Spell[], fn: SpellFilterFnI) => fn(acc), list);
  });
  const toggleClass = (name: Class) => {
    const index = selectedClasses.value.indexOf(name);

    if (index >= 0) {
      selectedClasses.value.splice(index, 1);
    } else {
      selectedClasses.value.push(name);
    }

    useLocalStorage('selectedCLass', selectedLvls.value);
  };

  const clearClass = () => {
    selectedClasses.value.length = 0;
    useLocalStorage('selectedCLass', selectedLvls.value);
  };

  const updateLvlFilter = (list: Array<Lvl>) => {
    selectedLvls.value.length = 0;

    list.forEach((lvl: Lvl) => {
      selectedLvls.value.push(+lvl);
    });

    useLocalStorage('selectedLvl', list);
  };

  return {
    selectedClasses,
    filteredSpellList,
    selectedLvls,

    toggleClass,
    clearClass,
    updateLvlFilter,
  };
});

export default useSpellFilteringStore;
