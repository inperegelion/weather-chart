import { createStore } from "redux";
import forecaseReducer from "./reducers/forecastReducer";

export default createStore(forecaseReducer, { city: "" });

