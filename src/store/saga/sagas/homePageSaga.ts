import { takeLatest } from "redux-saga/effects";

import { getHomePage } from "../../reducers/homePageReducer";

import { getHomePageHandler } from "../handlers/homePageHandler";

export default function* homePageSaga() {
  yield takeLatest(getHomePage, getHomePageHandler);
}
