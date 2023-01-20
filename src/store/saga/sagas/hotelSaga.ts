import { takeLatest } from "redux-saga/effects";
import { showError } from "../handlers/errorHandler";

import { increaseHotelCount } from "../../reducers/hotelReducer";
import { handleIncreaseHotelCount } from "../handlers/hotelHandlers";

export default function* hotelSaga() {
  yield takeLatest(increaseHotelCount, handleIncreaseHotelCount);
}
