import { observable, action } from "mobx";

export class CounterStore {
  @observable count: number = 0;

  @action.bound
  increment() {
    this.count++;
  }

  @action.bound
  decrement() {
    this.count--;
  }
}

export default new CounterStore();
