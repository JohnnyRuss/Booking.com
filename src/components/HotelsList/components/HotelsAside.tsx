/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { formatDate, generateHotelQuery } from "../../../lib";
import { useCalendar, useHotelsQuery, userFilter } from "../../../hooks";

import styles from "./styles/hotelsAside.module.scss";
import { Button, Calendar } from "../../Layouts";
import useFilter from "../../../hooks/layout/userFilter";

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

  const type = state.type;
  const city = state.city;
  const country = state.country;

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

  const { getHotelsQuery } = useHotelsQuery();

  useEffect(() => {
    // ?country=spain&city=madrid&type=apartment&destination=spain madrid&minPrice[gte]=100&minPrice[lte]=500
    const query = generateHotelQuery({
      destination,
      type: type || "",
      city: city || "",
      country: country || "",
      maxPrice: options.maxPrice || NaN,
      minPrice: options.minPrice || NaN,
    });

    const timer = setTimeout(() => {
      getHotelsQuery(query);
    }, 600);

    return () => clearTimeout(timer);
  }, [options.maxPrice, options.minPrice, destination, type, city]);

  const { handleSetDateRange, handleSetUser } = useFilter();

  useEffect(() => {
    handleSetDateRange(checkinDates);
    handleSetUser({
      adults: options.adults,
      children: options.children,
      rooms: options.rooms,
    });
  }, [options.adults, options.children, options.rooms, checkinDates]);

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
            value={options.minPrice || ""}
            onChange={(e) => handleOptions("minPrice", +e.target.value)}
            min={0}
          />
        </div>

        <div className={styles.optionField}>
          <label htmlFor="maxPrice">max price (per night)</label>
          <input
            id="maxPrice"
            type="number"
            value={options.maxPrice || ""}
            onChange={(e) => handleOptions("maxPrice", +e.target.value)}
            min={0}
          />
        </div>

        <div className={styles.optionField}>
          <label htmlFor="adults">adults</label>
          <input
            id="adults"
            type="number"
            value={options.adults || ""}
            onChange={(e) => handleOptions("adults", +e.target.value)}
            min={0}
          />
        </div>

        <div className={styles.optionField}>
          <label htmlFor="children">children</label>
          <input
            id="children"
            type="number"
            value={options.children || ""}
            onChange={(e) => handleOptions("children", +e.target.value)}
            min={0}
          />
        </div>

        <div className={styles.optionField}>
          <label htmlFor="rooms">rooms</label>
          <input
            id="rooms"
            type="number"
            value={options.rooms || ""}
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
