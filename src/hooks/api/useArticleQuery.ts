import { useAppDispatch } from "../../store/hook";

import { getArticle } from "../../store/reducers/articleReducer";
import { GetArticlePropsT } from "../../interface/reducers/articleReducer.types";

export default function useArticleQuery() {
  const dispatch = useAppDispatch();

  function getArticleQuery(param: GetArticlePropsT) {
    dispatch(getArticle(param));
  }

  return { getArticleQuery };
}
