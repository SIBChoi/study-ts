import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/users';

interface HasId {
  id?: number;
}

export class ApiSync<T extends HasId> {
  async fetch(id: number | string = ''): Promise<T> {
    const { data }: { data: T } = await axios.get(`${id}`);
    return data;
  }

  async save(data: T): Promise<T> {
    const { id } = data;

    if (id) {
      return await axios.put(`${id}`, data);
    } else {
      return await axios.post('', data);
    }
  }
}
