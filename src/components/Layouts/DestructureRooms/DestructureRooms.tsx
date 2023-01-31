import React from "react";
import { nanoid } from "@reduxjs/toolkit";

import styles from "./destructureRooms.module.scss";

interface RoomT {
  type: string;
  space: number;
  bathroom: number;
  bedroom: number;
  kitchen: number;
}
interface DestructureRoomsType {
  room: RoomT;
  className?: string;
}

const DestructureRooms: React.FC<DestructureRoomsType> = ({
  room,
  className,
}) => {
  return (
    <div className={`${styles.destructuredRoomsContainer} ${className || ""}`}>
      {destructureRooms(room)}
    </div>
  );
};

export default DestructureRooms;

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
