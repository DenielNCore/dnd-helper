import { defineStore } from 'pinia';
import { ref } from 'vue';

import useAppStore from '@/stores/appStore';

const useAuthStore = defineStore('auth', () => {
  const appStore = useAppStore();

  const isLoggedIn = ref(appStore.db.isValid);

  appStore.db.onValidationChange((valid: boolean) => {
    isLoggedIn.value = valid;
  });

  const login = async (l: string, p: string) => {
    await appStore.db.auth(l, p);
  };

  const logout = () => {
    appStore.db.logout();
  };
  return {
    isLoggedIn,

    login,
    logout,
  };
});

export default useAuthStore;
