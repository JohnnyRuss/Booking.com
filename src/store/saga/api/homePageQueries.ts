import { axiosQuery } from "../../axiosConfig";

export async function getByPropertyTypeQuery() {
  return await axiosQuery("/hotels/getByType");
}

export async function getByCityQuery() {
  return await axiosQuery("/hotels/getByCity");
}

export async function getExploreCountryQuery() {
  return await axiosQuery("/hotels/explore?country=georgia");
}

export async function getArticlesQuery() {
  return await axiosQuery("/inspiration");
}
