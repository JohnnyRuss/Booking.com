/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../store/hook";

import {
  selectRoomsLoadingState,
  selectRooms,
} from "../../../store/selectors/hotelsSelector";
import { useHotelsQuery } from "../../../hooks";

import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./styles/reserve.module.scss";
import RoomNumbers from "./RoomNumbers";
import { Spinner, DestructureRooms, Button } from "../../Layouts";

interface ReserveType {
  setOpenReserve: React.Dispatch<React.SetStateAction<boolean>>;
}

const Reserve: React.FC<ReserveType> = ({ setOpenReserve }) => {
  const { hotelId } = useParams();
  const { state } = useLocation();

  const { getHotelsRoomsQuery } = useHotelsQuery();

  const rooms = useAppSelector(selectRooms);
  const { loading, error } = useAppSelector(selectRoomsLoadingState);

  useEffect(() => {
    hotelId && getHotelsRoomsQuery(hotelId);
  }, []);

  return (
    <div className={styles.reserveWindow} onClick={() => setOpenReserve(false)}>
      <div className={styles.reserveModal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={() => setOpenReserve(false)}
        >
          <AiOutlineCloseCircle />
        </button>

        <span className={styles.modalHeading}>Select your rooms</span>

        {!error && !loading && (
          <div className={styles.roomsList}>
            {rooms.map((room) => (
              <div className={styles.roomBox} key={room._id}>
                <div className={styles.roomInfo}>
                  <span className={styles.roomTitle}>{room.title}</span>
                  <DestructureRooms
                    room={room.rooms}
                    className={styles.rooms}
                  />
                  <p className={styles.roomMaxPeople}>
                    <span>max people:</span>
                    <span>{room.maxPeople}</span>
                  </p>
                  <span className={styles.roomPrice}>{room.price}</span>
                </div>

                <RoomNumbers
                  dateRange={state.dateRange}
                  roomsNumbers={room.roomsNumbers}
                />
              </div>
            ))}
          </div>
        )}

        <Button>reserve</Button>

        {loading && <Spinner type="inline" />}
      </div>
    </div>
  );
};

export default Reserve;
