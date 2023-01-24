import { RootStateT } from "../store";

export const selectArticlesLoadingState = ({ articles }: RootStateT) =>
  articles.loadingState;

export const selectArticleLabels = ({ articles }: RootStateT) =>
  articles.articles;

export const selectArticle = ({ articles }: RootStateT) => articles.article;
