import PocketBase, { AuthModel, RecordSubscription } from 'pocketbase';

const DBUrl = import.meta.env.VITE_POCKET_BASE_URL;

type CampaignHistoryT = Array<{
  ids: string[];
  value: number;
  comment: string;
  date: Date;
}>;
class PocketDataBase {
  readonly client: PocketBase = new PocketBase(DBUrl);

  constructor() {
    console.info(this.client);

    // this.client.onRealtimeBeforeSubscribeRequest(request => {
    //   console.log('onRealtimeBeforeSubscribeRequest', request);
    // });
  }

  async auth(login: string, password: string) {
    let record;
    try {
      const response = await this.client.collection('users').authWithPassword(login, password);

      record = response.record;
      console.info('logged in');
    } catch (err) {
      console.warn(err);
    }

    return record;
  }

  subscribeToCollection(collectionName: string, cb: (data: any) => void) {
    this.client.collection(collectionName).subscribe('*', cb);
  }

  logout() {
    this.client.authStore.clear();
    console.info('logged out');
  }

  getCharacter(id: string) {
    return this.client.collection('characters').getOne(id);
  }

  onCurrentCharacterChange(id: string, cb: (record: AuthModel) => void) {
    this.client.collection('characters').subscribe(id, cb);
  }

  setCharacterExperience(id: string, value: number) {
    return this.client.collection('characters').update(id, { experience: value });
  }

  getCompaign(id: string) {
    return this.client.collection('campaigns').getOne(id);
  }

  setCampaignHistory(id: string, value: CampaignHistoryT) {
    return this.client.collection('campaigns').update(id, { history: value });
  }

  onCurrentCampaignChange(id: string, cb: (record: AuthModel) => void) {
    this.client.collection('campaigns').subscribe(id, cb);
  }

  offCurrentCampaignChange(id: string, cb: (record: AuthModel) => void) {
    this.client.collection('campaigns').unsubscribe(id);
  }

  offCurrentAllCampaignChange() {
    this.client.collection('campaigns').unsubscribe('*');
  }

  onCurrentUserChange(cb: (record: AuthModel) => void) {
    this.client.collection('users').subscribe(this.client.authStore.model?.id, cb);
  }

  onValidationChange(cb: (valid: boolean, record: AuthModel) => void) {
    this.client.authStore.onChange(() => {
      cb?.(this.isValid, this.record);
    });
  }

  get isValid() {
    return this.client.authStore.isValid;
  }

  get record() {
    return this.client.authStore.model;
  }
}

export default PocketDataBase;
