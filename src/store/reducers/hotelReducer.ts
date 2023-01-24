import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  HotelStateT,
  GetHotelPropT,
  GetHotelsPropT,
} from "../../interface/reducers/hotelReducer.types";
import { HotelLabelT, HotelT } from "../../interface/db/hotel.types";

const initialState: HotelStateT = {
  loadingState: {
    loading: false,
    error: false,
    message: "",
  },

  hotels: [],
  hotel: null,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setLoadingError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      state.loadingState = {
        loading: false,
        error: true,
        message,
      };
    },

    getHotels(state, { payload }: PayloadAction<GetHotelsPropT>) {
      state.loadingState = {
        ...state.loadingState,
        loading: true,
      };
    },

    setHotels(state, { payload }: PayloadAction<HotelLabelT[]>) {
      state.hotels = payload;

      state.loadingState = {
        ...state.loadingState,
        loading: false,
      };
    },

    getHotel(state, { payload }: PayloadAction<GetHotelPropT>) {
      state.loadingState = {
        ...state.loadingState,
        loading: true,
      };
    },

    setHotel(state, { payload }: PayloadAction<HotelT>) {
      state.hotel = payload;

      state.loadingState = {
        ...state.loadingState,
        loading: false,
      };
    },
  },
});

export default hotelSlice.reducer;
export const { setLoadingError, getHotels, setHotels, getHotel, setHotel } =
  hotelSlice.actions;
