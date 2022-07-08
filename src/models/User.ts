import axios, { AxiosResponse } from 'axios';
const url = 'http://localhost:3000/users';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
type P = keyof UserProps;
type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: P): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    if (!handlers || handlers.length === 0) return;

    handlers.forEach(callback => {
      callback();
    });
  }

  fetch(): void {
    axios
      .get(`${url}/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');
    if (id) {
      axios.patch(`${url}/${id}`, this.data);
    } else {
      axios.post(url, this.data);
    }
  }
}