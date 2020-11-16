export class Subject {

  constructor() {
    this.observers = new Set();
  }

  attach(observer) {
    this.observers.add(observer);
  }

  detach(o) {
    this.observers.delete(observer);
  }

  notify() {
    for (let observer of this.observers) {
      observer.update(this);
    }
  }
}

export class Observer {
  update(subject) {}
}
