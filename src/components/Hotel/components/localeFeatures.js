import { FaParking, FaShower, FaSmoking } from "react-icons/fa";
import {
  MdAir,
  MdBathroom,
  MdWifi,
  MdOutlineRoomService,
  MdOutlinePets,
  MdRestaurant,
  MdBalcony,
  MdFamilyRestroom,
} from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { TbDisabled } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { GiFlowerPot, GiAtSea } from "react-icons/gi";

export const localFeatures = {
  parking: {
    label: "free parking",
    icon: <FaParking />,
  },
  airConditioning: {
    label: "air conditioning",
    icon: <MdAir />,
  },
  privateBathroom: {
    label: "private bathroom",
    icon: <MdBathroom />,
  },
  wifi: {
    label: "Wi-Fi",
    icon: <MdWifi />,
  },
  shower: {
    label: "shower",
    icon: <FaShower />,
  },
  minibar: {
    label: "MiniBar",
    icon: <AiOutlineCheck />,
  },
  tv: {
    label: "TV",
    icon: <AiOutlineCheck />,
  },
  roomService: {
    label: "room service",
    icon: <MdOutlineRoomService />,
  },
  smoking: {
    label: "smoking zone",
    icon: <FaSmoking />,
  },
  forDisabledGuests: {
    label: "facilities for disabled guests",
    icon: <TbDisabled />,
  },
  petFriendly: {
    label: "pet friendly",
    icon: <MdOutlinePets />,
  },
  restaurant: {
    label: "restaurant",
    icon: <MdRestaurant />,
  },
  terrace: {
    label: "terrace",
    icon: <MdBalcony />,
  },
  fitnessCenter: {
    label: "fitness center",
    icon: <CgGym />,
  },
  familyRooms: {
    label: "family rooms",
    icon: <MdFamilyRestroom />,
  },
  garden: {
    label: "garden",
    icon: <GiFlowerPot />,
  },
  oceanView: {
    label: "ocean view",
    icon: <GiAtSea />,
  },
};
