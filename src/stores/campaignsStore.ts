import { defineStore } from 'pinia';
import { ref, watch, Ref } from 'vue';
import useAppStore from '@/stores/appStore';
import useAuthStore from '@/stores/authStore';
// import { Class } from '@/types/character';
import useCharactersStore, { CharacterI } from '@/stores/charactersStore';

// interface CharacterI {
//   name: string;
//   id: string;
//   experience: number;
//   lvl: number;
//   class: Class;
// }

interface CampaignExperienceI {
  ids: string[];
  value: number;
  comment: string;
  date: Date;
}

export interface CampaignI {
  name: string;
  history: Array<CampaignExperienceI>;
  id: string;
  characters: Ref<Array<Ref<CharacterI>>>;
}

const useCampaignsStore = defineStore('campaigns', () => {
  const appStore = useAppStore();
  const authStore = useAuthStore();
  const charactersStore = useCharactersStore();

  // console.log(authStore);

  const campaigns: Ref<Array<CampaignI>> = ref([]);
  // const allCharacters: Ref<Array<CharacterI>> = ref([]);

  // console.log(campaigns);
  const onCampaignChange = (id: string) => {
    appStore.db.onCurrentCampaignChange(id, (data: any) => {
      const { record } = data;

      const campaign = campaigns.value.find(c => c.id === record.id);
      if (!campaign) return;
      // TODO: add sync for new characters or unsubsribe from deleted
      campaign.history = record.history;
      // campaign.name = record.name;
      // campaign.characters = record.characters;
      // record.characters.forEach((id: string) => {
      //   const res = charactersStore.getCharacter(id);
      //   console.log(res);
      // });
    });
  };

  const onUserChange = () => {
    // console.log(authStore.user?.campaigns);
    authStore.user?.campaigns.forEach(id => {
      appStore.db.getCompaign(id).then(record => {
        const campaign: CampaignI = {
          name: record.name,
          id: record.id,
          history: record.history,
          characters: ref([]),
        };

        campaigns.value.push(campaign);

        record.characters.forEach(async (cId: string) => {
          const charRecord = await charactersStore.getCharacter(cId);

          if (!charRecord) return;

          const character: Ref<CharacterI> = ref({
            name: charRecord.name,
            id: charRecord.id,
            experience: charRecord.experience,
            lvl: charRecord.lvl,
            class: charRecord.class,
          });

          campaign.characters.value.push(character);

          watch(
            () => charactersStore.list.get(cId),
            (cr: any) => {
              if (!cr) return;

              character.value.name = cr.name;
              character.value.experience = cr.experience;
              character.value.lvl = cr.lvl;
              character.value.class = cr.class;
            },
            { deep: true },
          );
          // console.log(res);
        });

        onCampaignChange(record.id);
      });
    });
  };

  onUserChange();

  watch(
    () => authStore.user,
    user => {
      if (user) {
        onUserChange();
      } else {
        appStore.db.offCurrentAllCampaignChange();
        campaigns.value = [];
      }
    },
  );

  const addExperience = (campaignId: string, exp: CampaignExperienceI): Promise<any>[] => {
    const promises: Promise<any>[] = [];

    const { ids, value, comment } = exp;

    if (!ids.length || !value) return promises;

    const campaign = campaigns.value.find(c => c.id === campaignId);

    if (!campaign) return promises;
    ids.forEach(id => {
      const p = charactersStore.increase(id, value);
      if (p) promises.push(p);
    });

    const history = [...campaign.history, { ids, value, comment, date: new Date() }];

    const campaignPromise = appStore.db.setCampaignHistory(campaignId, history);

    promises.push(campaignPromise);
    return promises;
  };

  return {
    campaigns,

    addExperience,
  };
});

export default useCampaignsStore;
