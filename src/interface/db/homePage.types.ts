export interface HotelLabelT {
  _id: string;
  thumbnail: string;
  id: string;
  count: number;
  type: string;
}

export type ByPropertyTypeT = HotelLabelT;

export interface ByCityT extends Omit<HotelLabelT, "type"> {
  city: string;
}

export interface ExploreCountryT {
  locations: ByCityT[];
  country: string;
}
