import React from "react";
import { checkRoomAvailability } from "../../../lib";

import styles from "./styles/rooomNumbers.module.scss";

import { RoomsNumberT } from "../../../interface/db/hotel.types";
interface RoomNumberType {
  dateRange?: Date[];
  roomsNumbers: RoomsNumberT[];
}

const RoomNumbers: React.FC<RoomNumberType> = ({ dateRange, roomsNumbers }) => {
  return (
    <div className={styles.roomNumbers}>
      {[...roomsNumbers]
        .sort((a, b) => a.number - b.number)
        .map((num) => {
          const isAvailable = checkRoomAvailability(
            dateRange || [],
            num.unAvailableDates
          );

          return (
            <div
              className={`${styles.roomNumberField} ${
                !isAvailable ? styles.unAvailable : ""
              }`}
              key={num._id}
              title={
                !isAvailable
                  ? "room is reserved in your selected date range"
                  : "room is available"
              }
            >
              <label className={styles.roomNumberFieldNum}>{num.number}</label>
              <input type="checkbox" disabled={!isAvailable} />
            </div>
          );
        })}
    </div>
  );
};

export default RoomNumbers;
