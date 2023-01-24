import { HotelLabelT, HotelT } from "../db/hotel.types";

export interface HotelStateT {
  loadingState: LoadingStateT;
  hotels: HotelLabelT[];
  hotel: HotelT | null;
}

export type GetHotelPropT = string;
export type GetHotelsPropT = string;

interface LoadingStateT {
  loading: boolean;
  error: boolean;
  message: string;
}
