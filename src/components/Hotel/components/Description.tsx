import React from "react";

import styles from "./styles/description.module.scss";
import { Button, ParagraphGenerator } from "../../Layouts";

import {
  HotelDescriptionT,
  HotelLabelType,
  HotelPriceT,
} from "../../../interface/db/hotel.types";
interface DescriptionType {
  description: HotelDescriptionT;
  label: HotelLabelType;
  minPrice: HotelPriceT;
  daysToStay: number;
  setOpenReserve: React.Dispatch<React.SetStateAction<boolean>>;
}

const Description: React.FC<DescriptionType> = ({
  description,
  label,
  minPrice,
  daysToStay,
  setOpenReserve,
}) => {
  return (
    <div className={styles.hotelDescription}>
      <div className={styles.descriptionInfo}>
        <span className={styles.descriptionTitle}>{description.title}</span>

        <div>
          <ParagraphGenerator data={description.main} />
        </div>
      </div>

      <div className={styles.descriptionLabel}>
        <span className={styles.labelTitle}>{label.title}</span>
        <div className={styles.labelDescription}>
          <ParagraphGenerator data={label.text || ""} />
        </div>
        <span className={styles.priceBox}>
          <span className={styles.price}>
            {daysToStay ? minPrice.price * daysToStay : minPrice.price}$
          </span>
          <span>({daysToStay ? daysToStay : 1} night)</span>
        </span>
        {/* <Button onClick={() => setOpenReserve(true)}> */}
        <Button>reserve or book now</Button>
      </div>
    </div>
  );
};

export default Description;
