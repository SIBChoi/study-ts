interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  get getAll(): T;
}
interface Sync<T> {
  fetch(id: number | string): Promise<T>;
  save(data: T): Promise<T>;
}
interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attrs: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events
  ) {}

  get on() {
    return this.events.on;
  }

  get trriger() {
    return this.events.trigger;
  }

  get get() {
    return this.attrs.get;
  }

  get getAll(): T {
    return this.attrs.getAll;
  }

  set(update: T) {
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
