import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>();
  public attrs: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attrs = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trriger() {
    return this.events.trigger;
  }

  get get() {
    return this.attrs.get;
  }

  set(update: UserProps) {
    this.attrs.set(update);
    this.events.trigger('change');
  }

  async fetch(): Promise<void> {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('There is no Id. Please check out again');
    }

    const data = await this.sync.fetch(id);
    this.set(data);
  }

  async save(): Promise<void> {
    try {
      await this.sync.save(this.attrs.getAll);
      this.trriger('save');
    } catch (err) {
      this.trriger('error');
    }
  }
}
