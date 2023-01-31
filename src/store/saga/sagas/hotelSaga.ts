import { takeLatest } from "redux-saga/effects";

import { getHotels, getHotel, getRooms } from "../../reducers/hotelReducer";
import {
  getHotelsHandler,
  getHotelHandler,
  getHotelRoomsHandler,
} from "../handlers/hotelHandlers";

export default function* hotelSaga() {
  yield takeLatest(getHotels, getHotelsHandler);
  yield takeLatest(getHotel, getHotelHandler);
  yield takeLatest(getRooms, getHotelRoomsHandler);
}
