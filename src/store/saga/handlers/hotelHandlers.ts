import { put } from "redux-saga/effects";

import { setIncreasedCount } from "../../reducers/hotelReducer";

export function* handleIncreaseHotelCount({ payload }: { payload: number }) {
  try {
    yield put(setIncreasedCount(payload));
  } catch (error) {
    console.log(error);
  }
}
