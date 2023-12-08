import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
import { Spell } from '@/types/spells';
import PocketDataBase from '@/api/PocketBase';

export enum Route {
  MySpells,
  AllSpells,
  Skills,
}
const useAppStore = defineStore('app', () => {
  const db = new PocketDataBase();

  const route: Ref<Route> = ref(Route.MySpells);
  const menuIsOpen: Ref<boolean> = ref(false);
  const selectedSpells: Ref<Array<Spell>> = ref([]);

  const setRoute = (r: Route) => {
    route.value = r;
  };
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
    db,
    route,

    menuIsOpen,
    selectedSpells,
    setRoute,
    closeMenu,
    toggleMenu,
    addSpell,
    removeSpell,
  };
});

export default useAppStore;
