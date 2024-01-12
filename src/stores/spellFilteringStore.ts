import { defineStore } from 'pinia';
import { computed, ComputedRef, Ref, ref } from 'vue';
import { useLocalStorage } from '@vueuse/core';
import { LvlType, Action, Source } from '@/types/spell';
import { Class } from '@/types/character';

import Spell from '@/spells/list';
import spells from '@/spells/description';
import { ClassSpells } from '@/SpellList';

interface SpellFilterFnI {
  (list: Spell[]): Spell[];
}

const useSpellFilteringStore = defineStore('spellFiltering', () => {
  // useLocalStorage for storing all filtering in local storage
  const selectedClasses: Ref<Set<Class>> = useLocalStorage('selectedCLass', new Set<Class>());
  const selectedLvls: Ref<Set<LvlType>> = useLocalStorage('selectedLvl', new Set<LvlType>());
  const selectedActions: Ref<Set<keyof typeof Action>> = useLocalStorage(
    'selectedAction',
    new Set<keyof typeof Action>(),
  );
  const selectedSources: Ref<Set<keyof typeof Source>> = useLocalStorage(
    'selectedSources',
    new Set<keyof typeof Source>(),
  );

  const allSpellNames: ComputedRef<Array<Spell>> = computed(
    () =>
      Object.keys(spells).sort((a: string, b: string) => spells[a].lvl - spells[b].lvl) as Spell[],
  );

  const classFilteredSpellList: ComputedRef<Array<Spell>> = computed(() => {
    if (!selectedClasses.value.size) return allSpellNames.value;

    return allSpellNames.value.filter((sp: Spell) => {
      return Array.from(selectedClasses.value).some((selClass: Class) => {
        return ClassSpells[selClass].includes(sp);
      });
    });
  });

  const lvlFilter: SpellFilterFnI = list => {
    if (!selectedLvls.value.size) return list;

    return list.filter((sp: Spell) => {
      return selectedLvls.value.has(spells[sp]!.lvl);
    });
  };

  const actionFilter = (list: Spell[]) => {
    if (!selectedActions.value.size) return list;

    return list.filter((sp: Spell) => {
      return selectedActions.value.has(spells[sp]!.actionType);
    });
  };

  const sourceFilter = (list: Spell[]) => {
    if (!selectedSources.value.size) return list;

    return list.filter((sp: Spell) => {
      return selectedSources.value.has(spells[sp]!.source);
    });
  };

  const filteredSpellList: ComputedRef<Array<Spell>> = computed(() => {
    const list = [...classFilteredSpellList.value];

    const filterFnList: Array<SpellFilterFnI> = [lvlFilter, actionFilter, sourceFilter];

    return filterFnList.reduce((acc: Spell[], fn: SpellFilterFnI) => fn(acc), list);
  });

  const toggleClass = (name: Class) => {
    if (selectedClasses.value.has(name)) {
      selectedClasses.value.delete(name);
    } else {
      selectedClasses.value.add(name);
    }
  };

  const clearClass = () => {
    selectedClasses.value.clear();
  };

  const updateLvlFilter = (list: Array<LvlType>) => {
    selectedLvls.value.clear();

    list.forEach((lvl: LvlType) => {
      selectedLvls.value.add(lvl);
    });
  };

  const updatedActionFilter = (list: Array<Action>) => {
    selectedActions.value.clear();

    list.forEach((act: Action) => {
      selectedActions.value.add(act);
    });
  };

  const updatedSourceFilter = (list: Array<Source>) => {
    selectedSources.value.clear();
    list.forEach((source: Source) => {
      selectedSources.value.add(source);
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
