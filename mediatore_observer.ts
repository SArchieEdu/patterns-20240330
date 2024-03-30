const Mediator = {
  clients: [],

  handle() {},

  send() {},
};

const Store = {
  subscribers: new Set(),

  subscribe(callback) {
    this.subscribers.add(callback);
  },
  unsubscribe(callback) {
    this.subscribers.delete(callback);
  },

  dispatch(action) {
    this.subscribers.forEach((callback) => callback(action));
  },
};

const EventBuss = {
  subscribers: new Map<string, Set<() => void>>(),

  addEventListener(event, callback) {
    let eventSet = this.subscribers.get(event);

    if (!eventSet) {
      eventSet = new Set();
      this.subscribers.set(event, eventSet);
    }

    eventSet.add(callback);
  },

  removeEventListener(event, callback) {
    const eventSet = this.subscribers.get(event);
    eventSet.delete(callback);
  },

  emit(event) {
    const eventSet = this.subscribers.get(event);

    if (eventSet) {
      eventSet.forEach((callback) => callback(event));
    }
  },
};

const Publisher = {
  eventBuss: EventBuss,

  publish(event) {
    this.eventBuss.emit(event);
  },
};

const callback = (event) => {};
EventBuss.addEventListener("click", callback);
EventBuss.removeEventListener("click", callback);
