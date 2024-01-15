import { defineStore } from 'pinia';
import { ref, Ref } from 'vue';
// import { AuthModel } from 'pocketbase';
import useAppStore from '@/stores/appStore';
import { Class } from '@/types/character';
import { RecordModel } from 'pocketbase';

export interface CharacterI {
  name: string;
  id: string;
  experience: number;
  lvl: number;
  class: Class;
  avatar?: string;
}

const useCharactersStore = defineStore('characters', () => {
  const appStore = useAppStore();

  const list: Ref<Map<string, RecordModel | Promise<RecordModel>>> = ref(new Map());

  const getCharacter = async (id: string) => {
    if (list.value.has(id)) return list.value.get(id);

    const promise = appStore.db.getCharacter(id);

    list.value.set(id, promise);

    const record = await promise;

    appStore.db.onCurrentCharacterChange(record.id, async (data: any) => {
      const { record: rec } = data;

      const character = await list.value.get(record.id);
      if (!character) return;
      character.name = rec.name;
      character.experience = rec.experience;
      character.lvl = rec.lvl;
      character.class = rec.class;
      character.avatar = rec.avatar;
    });

    list.value.set(id, record);

    return record;
  };

  const increase = (id: string, val: number) => {
    const char = list.value.get(id) as unknown as { experience: number };

    if (!char) return;

    const { experience } = char;

    if (!experience && experience !== 0) return;

    appStore.db.setCharacterExperience(id, char.experience + val);
  };

  return {
    list,

    getCharacter,
    increase,
  };
});

export default useCharactersStore;
