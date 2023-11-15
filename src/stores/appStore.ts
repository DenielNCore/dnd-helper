import { defineStore } from 'pinia';

import { Ref, ref } from 'vue';
import { Spell } from '@/SpellList.ts';

const useAppStore = defineStore('app', () => {
  const menuIsOpen: Ref<boolean> = ref(false);
  const selectedSpells: Ref<Array<Spell>> = ref([]);

  const toggleMenu = () => {
    menuIsOpen.value = !menuIsOpen.value;
  };
  const closeMenu = () => {
    menuIsOpen.value = false;
  };
  const addSpell = (id: Spell) => {
    selectedSpells.value.push(id);
  };
  const removeSpell = (id: Spell) => {
    const index = selectedSpells.value.indexOf(id);
    selectedSpells.value.splice(index, 1);
  };

  return {
    menuIsOpen,
    selectedSpells,
    closeMenu,
    toggleMenu,
    addSpell,
    removeSpell,
  };
});

export default useAppStore;
