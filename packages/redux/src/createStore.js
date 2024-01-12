export const createStore = (reducer, preloadedState, enhancer) => {
  if (typeof enhancer === "function") {
    return enhancer(createStore)(reducer, preloadedState);
  }

  let currentReducer = reducer;
  let currentState = preloadedState;
  let currentListeners = new Map();
  let nextListeners = currentListeners;
  let listenerIdCounter = 0;
  let isDispatching = false;

  const subscribe = (listener) => {
    if (isDispatching) return;
    let isSubcribed = true;
    const listenerId = listenerIdCounter++;
    nextListeners.set(listenerId, listener);

    const unsubscribe = () => {
      if (!isSubcribed) return;
      if (isDispatching) return;
      isSubcribed = false;
      nextListeners.delete(listenerId);
      currentListeners = null;
    };
    return unsubscribe;
  };

  const dispatch = (action) => {
    if (isDispatching) return;
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    currentListeners = nextListeners;
    currentListeners.forEach((listener) => {
      listener();
    });
    return action;
  };

  const getState = () => {
    if (isDispatching) return;
    return currentState;
  };

  const replaceReducer = (nextReducer) => {
    currentReducer = nextReducer;
  };

  const store = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  };
  return store;
};
