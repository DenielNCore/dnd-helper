import { defineStore } from 'pinia';
import { computed, ComputedRef, Ref, ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { Lvl, Class, Action } from '@/types/spell';
import Spell from '@/spells/list';
import spells from '@/spells/description';
import { ClassSpells } from '@/SpellList';

interface SpellFilterFnI {
  (list: Spell[]): Spell[];
}

const useSpellFilteringStore = defineStore('spellFiltering', () => {
  // useLocalStorage for storing all filtering in local storage
  const selectedClasses: Ref<Array<Class>> = useLocalStorage('selectedCLass', []);
  const selectedLvls: Ref<Array<number>> = useLocalStorage('selectedLvl', []);
  const selectedActions: Ref<Array<string>> = useLocalStorage('selectedAction', []);

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
      return selectedLvls.value.includes(spells[sp]!.lvl);
    });
  };

  const actionFilter = (list: Spell[]) => {
    if (!selectedActions.value.length) return list;

    return list.filter((sp: Spell) => {
      return selectedActions.value.includes(spells[sp]!.actionType);
    });
  };

  const filteredSpellList: ComputedRef<Array<Spell>> = computed(() => {
    const list = [...classFilteredSpellList.value];

    const filterFnList: Array<SpellFilterFnI> = [lvlFilter, actionFilter];

    return filterFnList.reduce((acc: Spell[], fn: SpellFilterFnI) => fn(acc), list);
  });

  const toggleClass = (name: Class) => {
    const index = selectedClasses.value.indexOf(name);

    if (index >= 0) {
      selectedClasses.value.splice(index, 1);
    } else {
      selectedClasses.value.push(name);
    }

    useLocalStorage('selectedCLass', selectedClasses.value);
  };

  const clearClass = () => {
    selectedClasses.value.length = 0;
    useLocalStorage('selectedCLass', selectedClasses.value);
  };

  const updateLvlFilter = (list: Array<Lvl>) => {
    selectedLvls.value.length = 0;

    list.forEach((lvl: Lvl) => {
      selectedLvls.value.push(+lvl);
    });

    useLocalStorage('selectedLvl', list);
  };

  const updatedactionFilter = (list: Array<Action>) => {
    selectedActions.value.length = 0;

    list.forEach((act: Action) => {
      selectedActions.value.push(act);
    });

    useLocalStorage('selectedAction', list);
  };

  return {
    selectedClasses,
    filteredSpellList,
    selectedLvls,
    selectedActions,

    toggleClass,
    clearClass,
    updateLvlFilter,
    updatedactionFilter,
  };
});

export default useSpellFilteringStore;
