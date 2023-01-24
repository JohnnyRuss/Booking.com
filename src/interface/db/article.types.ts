export interface ArticleT {
  _id: string;
  title: string;
  thumbnail: string;
  intro: string;
  places: Place[];
}

interface Place {
  title: string;
  fig: string;
  description: string;
}

export interface ArticleLabelT {
  _id: string;
  title: string;
  thumbnail: string;
  intro: string;
}
