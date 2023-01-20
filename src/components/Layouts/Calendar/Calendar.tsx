import React from "react";
import CalendarEl from "react-calendar";
import "react-calendar/dist/Calendar.css";

export type CalendarValueT =
  | Date
  | [Date | null, Date | null]
  | null
  | undefined;
export type CalendarEventT = React.ChangeEvent<HTMLInputElement>;
export type CalendarHandlerT = (
  values: CalendarValueT,
  e: CalendarEventT
) => void;

interface CalendarType {
  handleDate: CalendarHandlerT;
  value: CalendarValueT;
}

const Calendar: React.FC<CalendarType> = ({ handleDate, value }) => {
  return <CalendarEl onChange={handleDate} selectRange={true} value={value} />;
};

export default Calendar;
