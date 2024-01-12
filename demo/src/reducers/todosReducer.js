import {
  FETCH_TODOS_START,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR
} from "../actionTypes/todosActionTypes";

export const todos = (
  state = {
    loading: false,
    todos: [],
    error: null
  },
  action
) => {
  console.log("todos reducer", action);
  switch (action.type) {
    case FETCH_TODOS_START:
      return { ...state, loading: true };
    case FETCH_TODOS_SUCCESS:
      return { ...state, loading: false, error: null, todos: action.payload };
    case FETCH_TODOS_ERROR:
      return { ...state, loading: false, todos: [], error: action.payload };
    default:
      return state;
  }
};
