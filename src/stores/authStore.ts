import { defineStore } from 'pinia';
import { ref, shallowRef } from 'vue';
import { AuthModel } from 'pocketbase';
import useAppStore from '@/stores/appStore';

interface UserI {
  // id: string;
  avatar: string;
  email: string;
  name: string;
  master: string;
  campaigns: string[];
  characters: string[];
}
const getUserData = (record: AuthModel): UserI | null => {
  if (!record) return null;
  return {
    // id: record.id,
    avatar: record.avatar,
    email: record.email,
    name: record.name,
    master: record.master,
    campaigns: record.campaigns,
    characters: record.characters,
  };
};

const useAuthStore = defineStore('auth', () => {
  const appStore = useAppStore();

  const isLoggedIn = ref(appStore.db.isValid);
  const user = ref(getUserData(appStore.db.record));

  // console.log(user);

  appStore.db.onValidationChange((valid: boolean, record: any) => {
    isLoggedIn.value = valid;
    user.value = getUserData(record);
  });

  appStore.db.onCurrentUserChange(data => {
    if (data) {
      const { action, record } = data;
      user.value = getUserData(record);
    }
  });

  const login = async (l: string, p: string) => {
    await appStore.db.auth(l, p);
  };

  const logout = () => {
    appStore.db.logout();
  };
  return {
    isLoggedIn,
    user,

    login,
    logout,
  };
});

export default useAuthStore;
