import { RootStateT } from "../store";

export const selectHomePageLoadingState = ({ homePage }: RootStateT) =>
  homePage.loadingState;

export const selectLocationLabelsByPropertyType = ({ homePage }: RootStateT) =>
  homePage.byPropertyType;

export const selectLocationLabelsByCity = ({ homePage }: RootStateT) =>
  homePage.byCity;

export const selectExploreCountry = ({ homePage }: RootStateT) =>
  homePage.explore;
