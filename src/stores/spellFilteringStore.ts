import { defineStore } from 'pinia';
import { computed, ComputedRef, Ref, ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { LvlType, Class, Action, Source } from '@/types/spell';
import Spell from '@/spells/list';
import spells from '@/spells/description';
import { ClassSpells } from '@/SpellList';

interface SpellFilterFnI {
  (list: Spell[]): Spell[];
}

const useSpellFilteringStore = defineStore('spellFiltering', () => {
  // useLocalStorage for storing all filtering in local storage
  const selectedClasses: Ref<Array<Class>> = useLocalStorage('selectedCLass', []);
  const selectedLvls: Ref<Array<LvlType>> = useLocalStorage('selectedLvl', []);
  const selectedActions: Ref<Array<keyof typeof Action>> = useLocalStorage('selectedAction', []);
  const selectedSources: Ref<Array<keyof typeof Source>> = useLocalStorage('selectedSources', []);

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

  const sourceFilter = (list: Spell[]) => {
    if (!selectedSources.value.length) return list;

    return list.filter((sp: Spell) => {
      return selectedSources.value.includes(spells[sp]!.source);
    });
  };

  const filteredSpellList: ComputedRef<Array<Spell>> = computed(() => {
    const list = [...classFilteredSpellList.value];

    const filterFnList: Array<SpellFilterFnI> = [lvlFilter, actionFilter, sourceFilter];

    return filterFnList.reduce((acc: Spell[], fn: SpellFilterFnI) => fn(acc), list);
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

  const updateLvlFilter = (list: Array<LvlType>) => {
    selectedLvls.value.length = 0;

    list.forEach((lvl: LvlType) => {
      selectedLvls.value.push(lvl);
    });
  };

  const updatedActionFilter = (list: Array<Action>) => {
    selectedActions.value.length = 0;

    list.forEach((act: Action) => {
      selectedActions.value.push(act);
    });
  };

  const updatedSourceFilter = (list: Array<Source>) => {
    selectedSources.value.length = 0;

    list.forEach((source: Source) => {
      selectedSources.value.push(source);
    });
  };

  return {
    selectedClasses,
    filteredSpellList,
    selectedLvls,
    selectedActions,
    selectedSources,

    toggleClass,
    clearClass,
    updateLvlFilter,
    updatedActionFilter,
    updatedSourceFilter,
  };
});

export default useSpellFilteringStore;
