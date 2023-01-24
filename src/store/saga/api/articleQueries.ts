import { axiosQuery } from "../../axiosConfig";
import { GetArticlePropsT } from "../../../interface/reducers/articleReducer.types";

export async function getArticleQuery(param: GetArticlePropsT) {
  return await axiosQuery(`inspiration/${param}`);
}
