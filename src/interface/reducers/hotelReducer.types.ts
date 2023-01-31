import { HotelLabelT, HotelT, RoomT } from "../db/hotel.types";

export interface HotelStateT {
  loadingState: LoadingStateT;
  roomsLoadingState: LoadingStateT;
  hotels: HotelLabelT[];
  hotel: HotelT | null;
  rooms: RoomT[];
}

export type GetHotelPropT = string;
export type GetHotelsPropT = string;
export type GetHotelRoomsPropT = string;

interface LoadingStateT {
  loading: boolean;
  error: boolean;
  message: string;
}
