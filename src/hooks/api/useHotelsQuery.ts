import { useAppDispatch } from "../../store/hook";
import { getHotels, getHotel } from "../../store/reducers/hotelReducer";
import {
  GetHotelPropT,
  GetHotelsPropT,
} from "../../interface/reducers/hotelReducer.types";

export default function useHotelsQuery() {
  const dispatch = useAppDispatch();

  function getHotelsQuery(prop: GetHotelsPropT) {
    dispatch(getHotels(prop));
  }

  function getHotelQuery(param: GetHotelPropT) {
    dispatch(getHotel(param));
  }

  return { getHotelsQuery, getHotelQuery };
}
