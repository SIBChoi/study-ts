import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/users';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(propName: UserProps): void {
    this.data = Object.assign(this.data, propName);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) {
      console.log('Wrong EvnetName. #Please Check out EventName');
      return;
    }
    handlers.forEach((callback) => callback());
  }

  async fetch(): Promise<void> {
    const data: UserProps = await (await axios.get(`${this.get('id')}`)).data;
    this.set(data);
  }

  async save(): Promise<void> {
    const id = this.get('id');

    if (id) {
      await axios.put(`${id}`, this.data);
    } else {
      await axios.post('', this.data);
    }
  }
}
