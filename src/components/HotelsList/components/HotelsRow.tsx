/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  selectHotelLabels,
  selectHotelsLoadingState,
} from "../../../store/selectors/hotelsSelector";
import { useAppSelector } from "../../../store/hook";
import { selectFilter } from "../../../store/selectors/filterSelectors";
import { useHotelsQuery } from "../../../hooks";

import styles from "./styles/hotelsRow.module.scss";
import { Button, Spinner, RatingBox, DestructureRooms } from "../../Layouts";

const HotelsRow: React.FC = () => {
  const data = useAppSelector(selectHotelLabels);
  const { dateRange, users } = useAppSelector(selectFilter);

  const { loading, error } = useAppSelector(selectHotelsLoadingState);

  const { handleRestHotels } = useHotelsQuery();

  useEffect(() => {
    return () => {
      handleRestHotels();
    };
  }, []);

  return (
    <div className={styles.hotelsRowContainer}>
      {loading && <Spinner type="inline" />}
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

              {card.rooms[0] && (
                <DestructureRooms
                  room={card.rooms[0]}
                  className={styles.rooms}
                />
              )}

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
