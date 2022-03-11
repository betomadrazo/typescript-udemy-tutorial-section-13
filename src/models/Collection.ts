import { User } from "./User";
import { Eventing } from "./Eventing";

export class Collection {
  models: User[] = [];
  events = new Eventing();

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }
}
