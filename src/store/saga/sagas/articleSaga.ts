import { takeLatest } from "redux-saga/effects";

import { getArticle } from "../../reducers/articleReducer";
import { getArticleHandler } from "../handlers/articleHandler";

export default function* articleSaga() {
  yield takeLatest(getArticle, getArticleHandler);
}
