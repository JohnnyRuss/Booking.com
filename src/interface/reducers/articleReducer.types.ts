import { ArticleLabelT, ArticleT } from "../db/article.types";

export interface StateT {
  articles: ArticleLabelT[];
  article: ArticleT | null;
  loadingState: LoadingStateT;
}

export type GetArticlePropsT = string;

interface LoadingStateT {
  loading: boolean;
  error: boolean;
  message: string;
}
