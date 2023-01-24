import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { StateT, SetHomePageT } from "../../interface/reducers/homePage.types";

const initialState: StateT = {
  loadingState: {
    loading: false,
    error: false,
    message: "",
  },

  byCity: [],
  byPropertyType: [],
  explore: {
    locations: [],
    country: "",
  },
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setHomePageError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      state.loadingState = {
        loading: false,
        error: true,
        message,
      };
    },

    getHomePage(state) {
      state.loadingState = {
        ...state.loadingState,
        loading: true,
      };
    },

    setHomePage(state, { payload }: PayloadAction<SetHomePageT>) {
      const { byCity, byPropertyType, explore } = payload;

      state.byCity = byCity;
      state.byPropertyType = byPropertyType;
      state.explore = explore;

      state.loadingState = {
        ...state.loadingState,
        loading: false,
      };
    },
  },
});

export default homePageSlice.reducer;
export const { getHomePage, setHomePage, setHomePageError } =
  homePageSlice.actions;
