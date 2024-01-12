import { compose } from "./compose";

export const applyMiddleware = (...middlewares) => {
  return (createStore) => (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState);
    let dispatch = () => {};
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    };
    const chain = middlewares.map((middleware) => middleware(middlewareAPI));
    dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch
    };
  };
};

/**
 * applyMiddleware 实现原理
 * 本质上是对  store 里面的 dispatch 做了增强
 */
