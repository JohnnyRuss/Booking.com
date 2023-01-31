import React from "react";

import styles from "./styles/header.module.scss";
import { MdLocationOn } from "react-icons/md";
import { Button, RatingBox } from "../../Layouts";

import { HotelLocationT, HotelPriceT } from "../../../interface/db/hotel.types";
interface HeaderType {
  location: HotelLocationT;
  name: string;
  minPrice: HotelPriceT;
  freeCancelation: boolean;
  rating: number;
  setOpenReserve: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderType> = ({
  location,
  name,
  minPrice,
  freeCancelation,
  rating,
  setOpenReserve,
}) => {
  return (
    <div className={styles.hotelHeader}>
      <div className={styles.hotelShortDescription}>
        <h4 className={styles.title}>{name}</h4>

        <div className={styles.location}>
          <span className={styles.iconBox}>
            <MdLocationOn />
          </span>

          {location.street && <span>{location.street},&nbsp;</span>}

          {location.urban && <span>{location.urban},&nbsp;</span>}

          {location.city && <span>{location.city},&nbsp;</span>}

          {location.country && <span>{location.country}</span>}

          {location.locationAccess && (
            <span>&nbsp;&mdash;&nbsp; {location.locationAccess}</span>
          )}
        </div>

        <span className={styles.locationRating}>
          {location.rating} location
        </span>

        {minPrice.taxi && (
          <span className={styles.msg}>
            Book a stay over ${minPrice.price} at this property and get a free
            airport taxi
          </span>
        )}

        {freeCancelation && (
          <span className={styles.msg}>
            <span className={styles.msgHead}>Free cancelation</span>
            You can cancel later, so lock in this great price today!
          </span>
        )}
      </div>

      <div className={styles.headerLeftSide}>
        <Button onClick={() => setOpenReserve(true)}>
          reserve or book now!
        </Button>
        <RatingBox rating={rating} />
      </div>
    </div>
  );
};

export default Header;
