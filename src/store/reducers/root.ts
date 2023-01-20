import { combineReducers } from "@reduxjs/toolkit";

import hotelReducer from "./hotelReducer";

export const root = combineReducers({
  hotels: hotelReducer,
});
