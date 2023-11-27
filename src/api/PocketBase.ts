import PocketBase from 'pocketbase';

const DBUrl = import.meta.env.VITE_POCKET_BASE_URL;
class PocketDataBase {
  readonly client: PocketBase = new PocketBase(DBUrl);

  constructor() {
    console.info(this.client);
  }

  async auth(login: string, password: string) {
    try {
      await this.client.collection('users').authWithPassword(login, password);

      console.info('logged in');
    } catch (err) {
      console.warn(err);
    }
  }

  logout() {
    this.client.authStore.clear();
    console.info('logged out');
  }

  onValidationChange(cb: (valid: boolean) => void) {
    this.client.authStore.onChange(() => {
      cb?.(this.isValid);
    });
  }

  get isValid() {
    return this.client.authStore.isValid;
  }
}

export default PocketDataBase;
