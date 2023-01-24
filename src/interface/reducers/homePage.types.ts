import {
  HotelLabelT,
  ExploreCountryT,
  ByPropertyTypeT,
  ByCityT,
} from "../db/homePage.types";

export interface StateT {
  byPropertyType: ByPropertyTypeT[];
  byCity: ByCityT[];
  explore: ExploreCountryT;
  loadingState: LoadingStateT;
}

export interface SetHomePageT {
  byCity: ByCityT[];
  byPropertyType: HotelLabelT[];
  explore: ExploreCountryT;
}

interface LoadingStateT {
  loading: boolean;
  error: boolean;
  message: string;
}
