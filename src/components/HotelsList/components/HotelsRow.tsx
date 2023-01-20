import React, { Fragment } from "react";

import data from "./data.json";

import styles from "./styles/hotelsRow.module.scss";
import { Button } from "../../Layouts";

interface HotelsRowType {}

const HotelsRow: React.FC<HotelsRowType> = (props) => {
  return (
    <div className={styles.hotelsRowContainer}>
      {data.map((card, i) => (
        <div className={styles.card} key={`card-fig--${i}`}>
          <figure className={styles.cardFig}>
            <img src={card.fig} alt={card.title} />
          </figure>
          <div className={styles.cardDesc}>
            <h4 className={styles.title}>{card.title}</h4>
            <span className={styles.distanceFromCenter}>
              {card.distanceFromCenter}m from center
            </span>
            {card.taxi && (
              <span className={styles.taxi}>free airport taxi</span>
            )}
            <p className={styles.shortDesc}>{card.shortDesc}</p>
            <div className={styles.rooms}>
              <Fragment key={`rooms-option--${card.fig}`}>
                {destructureRooms(card.rooms)}
              </Fragment>
            </div>
            {card.freeCancelation && (
              <div className={styles.freeCancelation}>
                <span>free cancelation</span>
                <span>
                  you can cancel later, so lock in this great price today!
                </span>
              </div>
            )}
            <div className={styles.rating}>
              <span>
                {card.rating > 8.5
                  ? "excellent"
                  : card.rating < 6
                  ? "bad"
                  : "normal"}
              </span>
              <span>{card.rating}</span>
            </div>
            <div className={styles.price}>
              <span>{card.price}$</span>
              {card.includesTaxesAndFees && (
                <span>includes taxes and fees</span>
              )}
            </div>
            <Button>see availability</Button>
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
    if (["bathroom", "bedroom"].includes(key))
      return (
        <span>
          <span>{data[key as keyof typeof data]}</span>
          &nbsp;
          <span>{key}</span>
        </span>
      );
    else if (key === "space")
      return (
        <span>
          {data[key as keyof typeof data]}m <sup>2</sup>
        </span>
      );
    else return <span>{data[key as keyof typeof data]}</span>;
  });
}
