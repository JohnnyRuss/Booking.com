/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useArticleQuery } from "../hooks";

import Article from "../components/Article/Article";

const ArticlePage: React.FC = () => {
  const { articleId } = useParams();

  const { getArticleQuery } = useArticleQuery();

  useEffect(() => {
    articleId && getArticleQuery(articleId);
  }, [articleId]);

  return <Article />;
};

export default ArticlePage;
