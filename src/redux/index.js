import { createStore } from "redux";
// import forecaseReducer from "./reducers/forecaseReducer";

export const forecaseReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_CITY":
      return { ...state, city: action.payload.city };

    default:
      return state;
  }
};

export default createStore(forecaseReducer, { city: "" });

export const setCity = (city) => ({
  type: "SET_CITY",
  payload: {
    city,
  },
});
