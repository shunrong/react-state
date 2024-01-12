import {
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR
} from "../actionTypes/todosActionTypes";

export const fetchTodos = (params) => {
  return (dispatch, getState) => {
    console.log(getState(), "getState");
    new Promise((resolve, reject) => {
      dispatch({ type: FETCH_TODOS_START });
      setTimeout(() => {
        const todos = [
          { id: "221", text: "吃饭饭", isDone: true },
          { id: "222", text: "睡觉觉", isDone: false },
          { id: "223", text: "看书书", isDone: false }
        ];
        if (params) {
          resolve(todos);
        } else {
          reject("NO Params");
        }
      }, 2000);
    }).then(
      (data) => {
        dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
      },
      (error) => {
        dispatch({ type: FETCH_TODOS_ERROR, payload: error });
      }
    );
  };
};

/**
 * 为什么异步的 action 要这样写？
 * actionCreator 是一个函数，默认情况下是返回 一个 plainObject，必须包含 type 属性
 * 异步的 action 应该返回一个函数，redux 中间件遇到这个类型是 function 的函数
 * 会把  dispatch 传给它，并且执行它
 * 那么在这个函数执行的里面(也就是 Promise success 或者 error 的时候)
 * 就可以再 dispatch 出 plainObject
 */
