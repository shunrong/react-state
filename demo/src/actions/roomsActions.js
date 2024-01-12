import {
  FETCH_ROOMS_START,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_ERROR
} from "../actionTypes/roomsActionTypes";
import { getUnits } from "./../api/units";

export const fetchRooms = (params) => {
  return (dispatch) => {
    dispatch({ type: FETCH_ROOMS_START });
    return getUnits(params).then(
      (data) => {
        dispatch({ type: FETCH_ROOMS_SUCCESS, payload: data });
      },
      (error) => {
        dispatch({ type: FETCH_ROOMS_ERROR, payload: error });
      }
    );
  };
};
