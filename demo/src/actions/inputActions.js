import { CHANGE_INPUT, RESET_INPUT } from "../actionTypes/inputActionTypes";

export const changeInput = (value) => {
  return {
    type: CHANGE_INPUT,
    payload: value
  };
};

export const resetInput = () => {
  return {
    type: RESET_INPUT,
    payload: ""
  };
};
