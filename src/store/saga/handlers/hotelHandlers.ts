import { put, call } from "redux-saga/effects";
import { showError } from "./errorHandler";

import {
  GetHotelPropT,
  GetHotelsPropT,
  GetHotelRoomsPropT,
} from "../../../interface/reducers/hotelReducer.types";

import {
  setLoadingError,
  setRoomsLoadingError,
  setHotels,
  setHotel,
  setRooms,
} from "../../reducers/hotelReducer";

import {
  getHotelsQuery,
  getHotelQuery,
  getHotelRoomsQuery,
} from "../api/hotelQueries";

export function* getHotelsHandler({ payload }: { payload: GetHotelsPropT }) {
  try {
    const { data } = yield call(getHotelsQuery, payload);
    yield put(setHotels(data));
  } catch (error: any) {
    yield showError({
      error,
      location: "getHotelsHandler",
      setter: setLoadingError,
      setterParams: {
        message: "",
      },
    });
  }
}

export function* getHotelHandler({ payload }: { payload: GetHotelPropT }) {
  try {
    const { data } = yield call(getHotelQuery, payload);
    yield put(setHotel(data));
  } catch (error: any) {
    yield showError({
      error,
      location: "getHotelHandler",
      setter: setLoadingError,
      setterParams: {
        message: "",
      },
    });
  }
}

export function* getHotelRoomsHandler({
  payload,
}: {
  payload: GetHotelRoomsPropT;
}) {
  try {
    const { data } = yield call(getHotelRoomsQuery, payload);
    yield put(setRooms(data));
  } catch (error: any) {
    yield showError({
      error,
      location: "getHotelRoomsHandler",
      setter: setRoomsLoadingError,
      setterParams: {
        message: "",
      },
    });
  }
}
