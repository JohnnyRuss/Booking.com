import React from "react";

import {
  selectArticle,
  selectArticlesLoadingState,
} from "../../store/selectors/articleSelectors";
import { useAppSelector } from "../../store/hook";
import { useWindowScroll } from "../../hooks";

import styles from "./components/styles/article.module.scss";
import Header from "./components/Header";
import { ParagraphGenerator, Spinner } from "../Layouts";

const Article: React.FC = () => {
  useWindowScroll();

  const article = useAppSelector(selectArticle);

  const { loading, error } = useAppSelector(selectArticlesLoadingState);

  return (
    <article className={styles.article}>
      {loading && <Spinner />}
      {!loading && !error && article && (
        <>
          <Header thumbnail={article.thumbnail} />
          <div className={styles.wrapper}>
            <h2 className={styles.articleTitle}>{article.title}</h2>
            <div className={styles.intro}>
              <ParagraphGenerator data={article.intro} />
            </div>

            <div className={styles.itemsContainer}>
              {article.places.map((item, i) => (
                <div key={`article-item__${i}`} className={styles.item}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <figure className={styles.itemFig}>
                    <img src={item.fig} alt={item.title} loading="lazy" />
                  </figure>
                  <div className={styles.itemTexts}>
                    <ParagraphGenerator data={item.description} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </article>
  );
};

export default Article;
