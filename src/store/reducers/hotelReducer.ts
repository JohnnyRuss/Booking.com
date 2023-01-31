import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  HotelStateT,
  GetHotelPropT,
  GetHotelsPropT,
  GetHotelRoomsPropT,
} from "../../interface/reducers/hotelReducer.types";
import { HotelLabelT, HotelT, RoomT } from "../../interface/db/hotel.types";

const initialState: HotelStateT = {
  loadingState: {
    loading: false,
    error: false,
    message: "",
  },

  roomsLoadingState: {
    loading: false,
    error: false,
    message: "",
  },

  hotels: [],
  hotel: null,
  rooms: [],
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

    setRoomsLoadingError(
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

    resetHotels(state) {
      state.hotels = [];
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

    getRooms(state, { payload }: PayloadAction<GetHotelRoomsPropT>) {
      state.roomsLoadingState = {
        ...state.roomsLoadingState,
        loading: true,
      };
    },

    setRooms(state, { payload }: PayloadAction<RoomT[]>) {
      state.rooms = payload;

      state.roomsLoadingState = {
        ...state.roomsLoadingState,
        loading: false,
      };
    },
  },
});

export default hotelSlice.reducer;
export const {
  setLoadingError,
  getHotels,
  setHotels,
  resetHotels,
  getHotel,
  setHotel,
  getRooms,
  setRooms,
  setRoomsLoadingError,
} = hotelSlice.actions;
