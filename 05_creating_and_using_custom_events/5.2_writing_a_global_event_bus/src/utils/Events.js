const events = new Map();

export default {
  $on(evetnName, fn) {
    if (!events.has(evetnName)) {
      events.set(evetnName, []);
    }

    events.get(eventName).push(fn);
  },

  $off(eventName, fn) {
    throw { message: "Not implemented" };
  },

  $emit(eventName, data) {
    if (events.has(eventName)) {
      event.get(eventName).forEach((fn) => fn(data));
    }
  },
};
