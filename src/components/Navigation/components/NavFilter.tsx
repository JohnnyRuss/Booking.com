import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { formatDate } from "../../../lib";
import { useCalendar } from "../../../hooks";

import styles from "./styles/navFilter.module.scss";
import { BiBed, BiCalendarEvent, BiUser } from "react-icons/bi";
import { Button, Calendar } from "../../Layouts";

interface NavFilterType {}

interface UsersCountT {
  adults: number;
  children: number;
  rooms: number;
}

const NavFilter: React.FC<NavFilterType> = (props) => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState<string>("");

  const [openCheckinModal, setOpenCheckinModal] = useState<boolean>(false);

  const [openUsersModal, setOpenUsersModal] = useState<boolean>(false);
  const [usersCount, setUsersCount] = useState<UsersCountT>({
    adults: 0,
    children: 0,
    rooms: 0,
  });

  function handleUserCounts({
    target,
    val,
  }: {
    target: "adults" | "children" | "rooms";
    val: number;
  }) {
    setUsersCount((prev) => ({
      ...prev,
      [target]: val < 0 && prev[target] === 0 ? 0 : (prev[target] += val),
    }));
  }

  const { checkinDates, handleDate } = useCalendar();

  return (
    <div className={styles.navFilter}>
      <div className={`${styles.inpBox} ${styles.destination}`}>
        <span className={styles.iconBox}>
          <BiBed />
        </span>
        <input
          placeholder="Where are you going ?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onFocus={() =>
            openCheckinModal
              ? setOpenCheckinModal(false)
              : openUsersModal
              ? setOpenUsersModal(false)
              : null
          }
        />
      </div>

      <div className={`${styles.inpBox} ${styles.checkIn}`}>
        <span className={styles.iconBox}>
          <BiCalendarEvent />
        </span>
        <label
          onClick={() => {
            setOpenCheckinModal((prev) => !prev);
            openUsersModal && setOpenUsersModal(false);
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

      <div className={`${styles.inpBox} ${styles.users}`}>
        <span className={styles.iconBox}>
          <BiUser />
        </span>
        <div
          className={styles.countsBox}
          onClick={(e) => {
            setOpenUsersModal((prev) => !prev);
            openCheckinModal && setOpenCheckinModal(false);
          }}
        >
          <span className={styles.countsBoxNested}>
            <span>{usersCount.adults}</span>
            <span>adult</span>
          </span>
          -
          <span className={styles.countsBoxNested}>
            <span>{usersCount.children}</span>
            <span>children</span>
          </span>
          -
          <span className={styles.countsBoxNested}>
            <span>{usersCount.rooms}</span>
            <span>room</span>
          </span>
        </div>

        {openUsersModal && (
          <div className={styles.usersModal}>
            <div className={styles.counterBox}>
              <span className={styles.counterBoxLabel}>adults</span>
              <div className={styles.counterBoxActionsBox}>
                <button
                  className={styles.counterBoxDecreaseBtn}
                  onClick={() =>
                    handleUserCounts({ target: "adults", val: -1 })
                  }
                >
                  -
                </button>
                <span className={styles.counterBoxCount}>
                  {usersCount.adults}
                </span>
                <button
                  className={styles.counterBoxEncreaseBtn}
                  onClick={() => handleUserCounts({ target: "adults", val: 1 })}
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.counterBox}>
              <span className={styles.counterBoxLabel}>children</span>
              <div className={styles.counterBoxActionsBox}>
                <button
                  className={styles.counterBoxDecreaseBtn}
                  onClick={() =>
                    handleUserCounts({ target: "children", val: -1 })
                  }
                >
                  -
                </button>
                <span className={styles.counterBoxCount}>
                  {usersCount.children}
                </span>
                <button
                  className={styles.counterBoxEncreaseBtn}
                  onClick={() =>
                    handleUserCounts({ target: "children", val: 1 })
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.counterBox}>
              <span className={styles.counterBoxLabel}>rooms</span>
              <div className={styles.counterBoxActionsBox}>
                <button
                  className={styles.counterBoxDecreaseBtn}
                  onClick={() => handleUserCounts({ target: "rooms", val: -1 })}
                >
                  -
                </button>
                <span className={styles.counterBoxCount}>
                  {usersCount.rooms}
                </span>
                <button
                  className={styles.counterBoxEncreaseBtn}
                  onClick={() => handleUserCounts({ target: "rooms", val: 1 })}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Button
        onClick={() =>
          navigate("/hotels", {
            state: {
              destination,
              usersCount,
              checkinDates,
            },
          })
        }
      >
        search
      </Button>
    </div>
  );
};

export default NavFilter;
