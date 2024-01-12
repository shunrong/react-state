export const bindActionCreators = (actions, dispatch) => {
  const result = {};
  const actionKeys = Object.keys(actions);
  actionKeys.forEach((key) => {
    result[key] = (...params) => dispatch(actions[key](...params));
  });
  return result;
};

/**
 * bindActionCreators 原理分析：
 * redux 的核心是将状态维护在一个顶层的 store 里面
 * 组件按需直接从 store 这个状态树里获取，获取的办法就是 mapStateToProps
 * 将 store 里面的状态值作为组件的属性 props 传入，组件在发现 ppros 改变之后会自动出发重新渲染
 * 基于单向数据流的设计规则，store 里面的变化必须依赖 dispatch 派发 action 来触发。
 * 也就是说，但凡 state 变化，一定是调用了 disptch 方法。这就需要在组件里可以调用 disptch
 * 方法1： import 全局的 store，通过 store.dispatch 去调用派发
 * 方法2： mapDispatchToProps，将 disptch 作为组件的 props 传入，对于 connect 方法，默认就会传 dispatch 给组件
 * 因为 dispatch 还需要关心 action type，有时候我们不希望在组件里面去理解这些东西，
 * 希望 props 里面直接拿到的是修改数据的方法，只需要传入参数调用即可
 * 那么就会在 mapDispatchToProps 方法里面，去 return 包装好的状态修改方法，
 * 当一个组件有很多的状态修改方法的时候，就需要一个工具方法批量来做这个事情
 * bindActionCreators 由此诞生
 */

// before:
const mapDispatchToProps1 = (dispatch) => {
  return {
    dispatch,
    changeInput: (value) => dispatch({ type: "CHANGE_INPUT", payload: value }),
    resetInput: () => dispatch({ type: "RESET_INPUT" })
  };
};

// after:
const mapDispatchToProps2 = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators(inputActions, dispatch)
  };
  // disptch 不需要传给组件的话，甚至可以直接写成这样
  return bindActionCreators(inputActions, dispatch);
};
