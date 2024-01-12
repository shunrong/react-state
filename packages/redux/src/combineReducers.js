export const combineReducers = (reducers) => {
  const reducerKeys = Object.keys(reducers);
  return (state = {}, action) => {
    let hasChanged = false;
    let nextState = {};
    reducerKeys.forEach((key) => {
      const reducer = reducers[key];
      const currentStateOfKey = state[key];
      const nextStateOfKey = reducer(currentStateOfKey, action);
      nextState[key] = nextStateOfKey;
      hasChanged = hasChanged || currentStateOfKey !== nextStateOfKey;
    });
    return hasChanged ? nextState : state;
  };
};

/**
 * combineReducers 原理分析：
 * combineReducers 传入的是一些 reducer 组成的对象
 * 返回的也是 reducer，不过是只有一个的 reducer，我们一般称作 rootReducer
 * 对于一般的 reducer 就是通过 state 和 action 计算出下一个 state
 * 不过它比较简单纯粹，通过 if 或者 switch 语法去判断 action.type 就可以了。
 * 对于 rootReducer 而言，它需要计算的是整个 store 里面的全部 state
 * 它要做的事情就是，拿着 action 去计算每一个 reducer，然后将计算后的 state 再组合起来
 * 这也就回答了，为什么 redux 里面任何一个 action 触发，会执行所有的 reducer，
 * 虽然这在一个 action 可以改变多个 reducer 时是很有用的，但这其实是不合理的
 * 因此必须要注意一点，switch 里面 default 要 returen state，这样没有改变的 state 就不会触发重新渲染
 * 在书写 redux 代码的时候还应该注意的规范：reducer 之间不要共用 actionType
 * 如果一次操作会触发两处 reducer state 的改变，宁愿 dispatch 两个 action
 */
