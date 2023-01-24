import { combineReducers } from "@reduxjs/toolkit";

import hotelReducer from "./hotelReducer";
import homePageReducer from "./homePageReducer";
import articleReducer from "./articleReducer";
import filterReducer from "./filterReducer";

export const root = combineReducers({
  hotels: hotelReducer,
  homePage: homePageReducer,
  articles: articleReducer,
  filter: filterReducer,
});
