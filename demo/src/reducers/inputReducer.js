import { CHANGE_INPUT, RESET_INPUT } from "../actionTypes/inputActionTypes";

export const input = (state = "", action) => {
  console.log("input reducer", action);
  switch (action.type) {
    case CHANGE_INPUT:
      return action.payload;
    case RESET_INPUT:
      return "";
    default:
      return state;
  }
};
