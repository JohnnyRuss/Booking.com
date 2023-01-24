import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import {
  selectHotelLabels,
  selectHotelsLoadingState,
} from "../../../store/selectors/hotelsSelector";
import { useAppSelector } from "../../../store/hook";
import { selectFilter } from "../../../store/selectors/filterSelectors";

import styles from "./styles/hotelsRow.module.scss";
import { Button, Spinner, RatingBox } from "../../Layouts";

const HotelsRow: React.FC = () => {
  const data = useAppSelector(selectHotelLabels);
  const { dateRange, users } = useAppSelector(selectFilter);

  const { loading, error } = useAppSelector(selectHotelsLoadingState);

  return (
    <div className={styles.hotelsRowContainer}>
      {loading && <Spinner type="absolute" />}
      {!loading &&
        !error &&
        data.map((card, i) => (
          <div className={styles.card} key={`card-fig--${i}`}>
            <figure className={styles.cardFig}>
              <img src={card.thumbnail} alt={card.name} loading="lazy" />
            </figure>

            <div className={styles.cardDesc}>
              <h4 className={styles.title}>
                <Link
                  to={card._id}
                  state={{
                    dateRange,
                    users,
                  }}
                >
                  {card.name}
                </Link>
              </h4>

              <span className={styles.locationAccess}>
                {card.location.locationAccess}
              </span>

              {card.minPrice.taxi && (
                <span className={styles.taxi}>free airport taxi</span>
              )}

              <p className={styles.shortDesc}>{card.description.short}</p>

              <div className={styles.rooms}>
                {card.rooms[0] && (
                  <Fragment key={`rooms-option--${card.thumbnail}`}>
                    {destructureRooms(card.rooms[0])}
                  </Fragment>
                )}
              </div>

              {card.freeCancelation && (
                <div className={styles.freeCancelation}>
                  <span>free cancelation</span>
                  <span>
                    you can cancel later, so lock in this great price today!
                  </span>
                </div>
              )}

              <div className={styles.ratingBox}>
                <span className={styles.reteVerbal}>
                  {card.location.rating}
                </span>
                <RatingBox rating={card.rating} />
              </div>

              <div className={styles.priceBox}>
                <span className={styles.price}>{card.minPrice.price}$</span>
                {card.minPrice.taxi && (
                  <span className={styles.msg}>includes taxes and fees</span>
                )}
              </div>

              <Button>
                <Link
                  to={card._id}
                  state={{
                    dateRange,
                    users,
                  }}
                >
                  see availability
                </Link>
              </Button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default HotelsRow;

interface RoomT {
  type: string;
  bathroom: number;
  space: number;
  bedroom: number;
}

function destructureRooms(data: RoomT) {
  return Object.keys(data).map((key) => {
    if (["bathroom", "bedroom", "kitchen"].includes(key))
      return (
        <span key={nanoid()}>
          <span>{data[key as keyof typeof data]}</span>
          &nbsp;
          <span>{key}</span>
        </span>
      );
    else if (key === "space")
      return (
        <span key={nanoid()}>
          {data[key as keyof typeof data]}m <sup>2</sup>
        </span>
      );
    else return <span key={nanoid()}>{data[key as keyof typeof data]}</span>;
  });
}
