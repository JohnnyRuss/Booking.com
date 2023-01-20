import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { formatDate } from "../../../lib";
import { useCalendar } from "../../../hooks";

import styles from "./styles/hotelsAside.module.scss";
import { Button, Calendar } from "../../Layouts";

interface HotelsAsideType {}
interface OptionsT {
  minPrice: number | undefined;
  maxPrice: number | undefined;
  adults: number | undefined;
  children: number | undefined;
  rooms: number | undefined;
}

const HotelsAside: React.FC<HotelsAsideType> = (props) => {
  const { state } = useLocation();

  const [destination, setDestination] = useState<string>(
    state?.destination ? state?.destination : ""
  );

  const [options, setOptions] = useState<OptionsT>({
    minPrice: NaN,
    maxPrice: NaN,
    adults: state?.usersCount?.adults ? state?.usersCount?.adults : NaN,
    children: state?.usersCount?.children ? state?.usersCount?.children : NaN,
    rooms: state?.usersCount?.rooms ? state?.usersCount?.rooms : NaN,
  });

  function handleOptions(
    target: "minPrice" | "maxPrice" | "adults" | "children" | "rooms",
    value: number
  ) {
    setOptions((prev) => ({
      ...prev,
      [target]: value,
    }));
  }

  const [openCheckin, setOpenCheckin] = useState<boolean>();

  const { checkinDates, handleDate } = useCalendar(
    state?.checkinDates ? { checkinDates: state.checkinDates } : undefined
  );

  return (
    <aside className={styles.hotelsAside}>
      <span className={styles.asideHead}>search</span>

      <div className={styles.destination}>
        <label htmlFor="destination">destination</label>
        <input
          id="destination"
          className={styles.field}
          type="text"
          placeholder="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>

      <div className={styles.checkin}>
        <label onClick={() => setOpenCheckin((prev) => !prev)}>
          destination
        </label>
        <div
          className={styles.field}
          onClick={() => setOpenCheckin((prev) => !prev)}
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
              : "Check-in"}
          </span>
        </div>
        {openCheckin && (
          <div className={styles.checkinModal}>
            <Calendar value={checkinDates} handleDate={handleDate} />
          </div>
        )}
      </div>

      <span className={styles.optionsHead}>options</span>
      <div className={styles.optionsBox}>
        <div className={styles.optionField}>
          <label htmlFor="minPrice">min price (per night)</label>
          <input
            id="minPrice"
            type="number"
            value={options.minPrice || NaN}
            onChange={(e) => handleOptions("minPrice", +e.target.value)}
            min={0}
          />
        </div>
        <div className={styles.optionField}>
          <label htmlFor="maxPrice">max price (per night)</label>
          <input
            id="maxPrice"
            type="number"
            value={options.maxPrice}
            onChange={(e) => handleOptions("maxPrice", +e.target.value)}
            min={0}
          />
        </div>
        <div className={styles.optionField}>
          <label htmlFor="adults">adults</label>
          <input
            id="adults"
            type="number"
            value={options.adults}
            onChange={(e) => handleOptions("adults", +e.target.value)}
            min={0}
          />
        </div>
        <div className={styles.optionField}>
          <label htmlFor="children">children</label>
          <input
            id="children"
            type="number"
            value={options.children}
            onChange={(e) => handleOptions("children", +e.target.value)}
            min={0}
          />
        </div>
        <div className={styles.optionField}>
          <label htmlFor="rooms">rooms</label>
          <input
            id="rooms"
            type="number"
            value={options.rooms || NaN}
            onChange={(e) => handleOptions("rooms", +e.target.value)}
            min={0}
          />
        </div>
      </div>

      <Button>search</Button>
    </aside>
  );
};

export default HotelsAside;
