import axios, { AxiosResponse } from 'axios';
const url = 'http://localhost:3000/users';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}
type P = keyof UserProps;

export class User {
  constructor(private data: UserProps) {}

  get(propName: P): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
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
