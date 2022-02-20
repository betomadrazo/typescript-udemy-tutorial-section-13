import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}


export class User  {
  url = 'http://localhost:3000/users';

  public events = new Eventing();
s
  constructor(private data: UserProps) { }

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
