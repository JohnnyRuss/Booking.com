import { call, put, all } from "redux-saga/effects";
import { showError } from "./errorHandler";

import {
  getByCityQuery,
  getArticlesQuery,
  getByPropertyTypeQuery,
  getExploreCountryQuery,
} from "../api/homePageQueries";

import { setArticleLabels } from "../../reducers/articleReducer";

import { setHomePage, setHomePageError } from "../../reducers/homePageReducer";

export function* getHomePageHandler(): Generator<any, any, any> {
  try {
    const [
      { data: byCity },
      { data: articles },
      { data: byPropertyType },
      { data: explore },
    ] = yield all([
      call(getByCityQuery),
      call(getArticlesQuery),
      call(getByPropertyTypeQuery),
      call(getExploreCountryQuery),
    ]);

    yield put(setHomePage({ byCity, byPropertyType, explore }));
    yield put(setArticleLabels(articles));
  } catch (error: any) {
    yield showError({
      error,
      location: "getHomePageHandler",
      setter: setHomePageError,
      setterParams: {
        message: "",
      },
    });
  }
}
