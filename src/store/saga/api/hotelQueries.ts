import { axiosQuery } from "../../axiosConfig";

import {
  GetHotelPropT,
  GetHotelsPropT,
  GetHotelRoomsPropT,
} from "../../../interface/reducers/hotelReducer.types";

export async function getHotelsQuery(query: GetHotelsPropT) {
  return await axiosQuery(`/hotels${query}`);
}

export async function getHotelQuery(param: GetHotelPropT) {
  return await axiosQuery(`/hotels/${param}`);
}

export async function getHotelRoomsQuery(param: GetHotelRoomsPropT) {
  return await axiosQuery(`/rooms/hotel/${param}`);
}
