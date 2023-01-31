export interface HotelT {
  _id: string;
  name: string;
  type: string;
  location: HotelLocationT;
  media: string[];
  thumbnail: string;
  description: HotelDescriptionT;
  label: HotelLabelType;
  rating: number;
  rooms: string[];
  minPrice: HotelPriceT;
  freeCancelation: boolean;
  featured: boolean;
  features: HotelFeaturesT;
  createdAt: Date;
  updatedAt: Date;
}

export interface HotelLabelT {
  _id: string;
  name: string;
  thumbnail: string;
  location: {
    locationAccess?: string;
    rating?: string;
  };
  minPrice: HotelPriceT;
  description: {
    short?: string;
  };
  freeCancelation: boolean;
  rating: number;
  rooms: {
    type: string;
    space: number;
    bathroom: number;
    bedroom: number;
    kitchen: number;
  }[];
}

export interface HotelLocationT {
  street?: string;
  urban?: string;
  city: string;
  country: string;
  locationAccess?: string;
  rating?: string;
}

export interface HotelDescriptionT {
  title?: string;
  main: string;
  short?: string;
}

export interface HotelPriceT {
  price: number;
  taxi: boolean;
}

export interface HotelLabelType {
  title?: string;
  text?: string;
}

export interface HotelFeaturesT {
  parking?: boolean;
  airConditioning?: boolean;
  privateBathroom?: boolean;
  wifi?: boolean;
  shower?: boolean;
  minibar?: boolean;
  tv?: boolean;
  roomService?: boolean;
  smoking?: boolean;
  forDisabledGuests?: boolean;
  petFriendly?: boolean;
  restaurant?: boolean;
  terrace?: boolean;
  fitnessCenter?: boolean;
  familyRooms?: boolean;
  garden?: boolean;
  oceanView?: boolean;
}

////////////

export interface RoomT {
  rooms: RoomsT;
  _id: string;
  hotel: string;
  title: string;
  price: number;
  maxPeople: number;
  roomsNumbers: RoomsNumberT[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface RoomsNumberT {
  number: number;
  unAvailableDates: UnAvailableDateT[];
  _id: string;
}

interface UnAvailableDateT {
  start: string;
  end: string;
  _id: string;
}

interface RoomsT {
  type: string;
  space: number;
  bathroom: number;
  bedroom: number;
  kitchen: number;
}
