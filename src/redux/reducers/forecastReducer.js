import { SET_CITY } from "../actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.payload.city };

    default:
      return state;
  }
};
