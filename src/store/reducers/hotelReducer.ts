import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { HotelStateT } from "../../interface/reducers/hotelReducer.types";

const initialState: HotelStateT = {
  hotelCount: 2,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    increaseHotelCount(state, { payload }: PayloadAction<number>) {},

    setIncreasedCount(state, { payload }) {
      state.hotelCount = state.hotelCount += payload;
    },
  },
});

export default hotelSlice.reducer;
export const { increaseHotelCount, setIncreasedCount } = hotelSlice.actions;
