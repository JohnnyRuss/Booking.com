import { call, put } from "redux-saga/effects";
import { showError } from "./errorHandler";

import { setLoadingError, setArticle } from "../../reducers/articleReducer";

import { GetArticlePropsT } from "../../../interface/reducers/articleReducer.types";
import { getArticleQuery } from "../api/articleQueries";

export function* getArticleHandler({ payload }: { payload: GetArticlePropsT }) {
  try {
    const { data } = yield call(getArticleQuery, payload);
    yield put(setArticle(data));
  } catch (error: any) {
    yield showError({
      error,
      location: "getArticleHandler",
      setter: setLoadingError,
      setterParams: { message: "" },
    });
  }
}
