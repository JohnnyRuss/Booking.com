import { useAppDispatch } from "../../store/hook";
import {
  getHotels,
  getHotel,
  getRooms,
  resetHotels,
} from "../../store/reducers/hotelReducer";
import {
  GetHotelPropT,
  GetHotelsPropT,
  GetHotelRoomsPropT,
} from "../../interface/reducers/hotelReducer.types";

export default function useHotelsQuery() {
  const dispatch = useAppDispatch();

  const getHotelsQuery = (prop: GetHotelsPropT) => dispatch(getHotels(prop));

  const getHotelQuery = (param: GetHotelPropT) => dispatch(getHotel(param));

  const getHotelsRoomsQuery = (params: GetHotelRoomsPropT) =>
    dispatch(getRooms(params));

  const handleRestHotels = () => dispatch(resetHotels());

  return {
    getHotelsQuery,
    getHotelQuery,
    getHotelsRoomsQuery,
    handleRestHotels,
  };
}
