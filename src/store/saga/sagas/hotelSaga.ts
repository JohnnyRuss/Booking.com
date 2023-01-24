import { takeLatest } from "redux-saga/effects";

import { getHotels, getHotel } from "../../reducers/hotelReducer";
import { getHotelsHandler, getHotelHandler } from "../handlers/hotelHandlers";

export default function* hotelSaga() {
  yield takeLatest(getHotels, getHotelsHandler);
  yield takeLatest(getHotel, getHotelHandler);
}
