import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  StateT,
  GetArticlePropsT,
} from "../../interface/reducers/articleReducer.types";
import { ArticleT, ArticleLabelT } from "../../interface/db/article.types";

const initialState: StateT = {
  loadingState: {
    loading: false,
    error: false,
    message: "",
  },

  article: null,
  articles: [],
};

const articleSlice = createSlice({
  name: "article",
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

    getArticleLabels() {},

    setArticleLabels(state, { payload }: PayloadAction<ArticleLabelT[]>) {
      state.articles = payload;
    },

    getArticle(state, { payload }: PayloadAction<GetArticlePropsT>) {
      state.loadingState = {
        ...state.loadingState,
        loading: true,
      };
    },

    setArticle(state, { payload }: PayloadAction<ArticleT>) {
      state.article = payload;

      state.loadingState = {
        ...state.loadingState,
        loading: false,
      };
    },
  },
});

export default articleSlice.reducer;
export const {
  setLoadingError,
  getArticleLabels,
  setArticleLabels,
  getArticle,
  setArticle,
} = articleSlice.actions;
