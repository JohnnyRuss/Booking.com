import { RootStateT } from "../store";

export const selectHotelsLoadingState = ({ hotels }: RootStateT) =>
  hotels.loadingState;

export const selectHotelLabels = ({ hotels }: RootStateT) => hotels.hotels;

export const selectHotel = ({ hotels }: RootStateT) => hotels.hotel;

export const selectRoomsLoadingState = ({ hotels }: RootStateT) =>
  hotels.roomsLoadingState;

export const selectRooms = ({ hotels }: RootStateT) => hotels.rooms;
