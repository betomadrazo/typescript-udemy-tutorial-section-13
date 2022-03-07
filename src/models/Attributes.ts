export class Attributes<T> {
  constructor(private data: T) { }
  // <K extends keyof T> Sets up a generic constraint
  // it can only be one of the keys of T
  // T[K] is just like a normal look up
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
