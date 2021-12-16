import { UserProps } from './User';

export class Attributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(update: T): void {
    this.data = Object.assign(this.data, update);
  }

  get getAll(): T {
    return this.data;
  }
}
