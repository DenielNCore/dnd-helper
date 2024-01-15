import { defineStore } from 'pinia';
import { Ref, ref } from 'vue';
import Spell from '@/spells/list';
import PocketDataBase from '@/api/PocketBase';
import { useLocalStorage } from '@vueuse/core';

export enum Route {
  MySpells,
  AllSpells,
  Skills,
  Battle,
  Campaign,
}
const useAppStore = defineStore('app', () => {
  const db = new PocketDataBase();

  const route: Ref<Route> = useLocalStorage('route', Route.MySpells);
  const menuIsOpen: Ref<boolean> = ref(false);
  const selectedSpells: Ref<Set<Spell>> = useLocalStorage('selectedSpells', new Set<Spell>());

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
    selectedSpells.value.add(id);
  };
  const removeSpell = (id: Spell) => {
    selectedSpells.value.delete(id);
  };

  // db.subscribeToCollection('users', (data: any) => {
  //   console.log(data);
  // });

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
