import React, { useState } from "react";

import { formatDate } from "../../../lib";
import { CalendarValueT, CalendarHandlerT } from "../Calendar/Calendar";

import styles from "./checkin.module.scss";
import { BiCalendarEvent } from "react-icons/bi";
import { Calendar } from "../";

interface CheckinType {
  checkinDates: CalendarValueT;
  handleDate: CalendarHandlerT;
  handleOnModal?: () => void;
}

const Checkin: React.FC<CheckinType> = ({
  checkinDates,
  handleDate,
  handleOnModal,
}) => {
  const [openCheckinModal, setOpenCheckinModal] = useState<boolean>(false);

  return (
    <div className={`${styles.inpBox} ${styles.checkIn}`}>
      <span className={styles.iconBox}>
        <BiCalendarEvent />
      </span>
      <label
        onClick={() => {
          setOpenCheckinModal((prev) => !prev);
          handleOnModal && handleOnModal();
        }}
      >
        <span>
          {Array.isArray(checkinDates) && checkinDates[0]
            ? formatDate(new Date(checkinDates[0]))
            : "Check-in"}
        </span>
        &nbsp; &mdash; &nbsp;
        <span>
          {Array.isArray(checkinDates) && checkinDates[1]
            ? formatDate(new Date(checkinDates[1]))
            : "Check-out"}
        </span>
      </label>

      {openCheckinModal && (
        <div className={styles.checkinModal}>
          <Calendar handleDate={handleDate} value={checkinDates} />
        </div>
      )}
    </div>
  );
};

export default Checkin;
