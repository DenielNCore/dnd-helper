import { defineStore } from 'pinia';

import { Ref, ref } from 'vue';

const useAppStore = defineStore('app', () => {
  const menuIsOpen: Ref<boolean> = ref(false);

  const toggleMenu = () => {
    menuIsOpen.value = !menuIsOpen.value;
  };

  return {
    menuIsOpen,
    toggleMenu,
  };
});

export default useAppStore;
