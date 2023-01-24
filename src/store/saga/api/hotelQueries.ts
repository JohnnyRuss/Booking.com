import { axiosQuery } from "../../axiosConfig";

import {
  GetHotelPropT,
  GetHotelsPropT,
} from "../../../interface/reducers/hotelReducer.types";

export async function getHotelsQuery(query: GetHotelsPropT) {
  return await axiosQuery(`/hotels${query}`);
}

export async function getHotelQuery(param: GetHotelPropT) {
  return await axiosQuery(`/hotels/${param}`);
}
