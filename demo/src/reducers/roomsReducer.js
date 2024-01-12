import {
  FETCH_ROOMS_START,
  FETCH_ROOMS_SUCCESS,
  FETCH_ROOMS_ERROR
} from "../actionTypes/roomsActionTypes";

export const rooms = (
  state = {
    loading: false,
    rooms: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case FETCH_ROOMS_START:
      return { ...state, loading: true };
    case FETCH_ROOMS_SUCCESS:
      return { ...state, loading: false, error: null, rooms: action.payload };
    case FETCH_ROOMS_ERROR:
      return { ...state, loading: false, rooms: [], error: action.payload };
    default:
      return state;
  }
};
