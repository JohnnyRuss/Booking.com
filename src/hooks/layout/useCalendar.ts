import { useState } from "react";

import {
  CalendarValueT,
  CalendarEventT,
} from "../../components/Layouts/Calendar/Calendar";

type ParamsT = {
  checkinDates?: CalendarValueT | undefined;
};

export default function useCalendar(params?: ParamsT) {
  const [checkinDates, setCheckinDates] = useState<CalendarValueT>(
    params?.checkinDates ? params?.checkinDates : undefined
  );

  function handleDate(values: CalendarValueT, e: CalendarEventT) {
    e.stopPropagation();
    setCheckinDates(values);
  }

  return { handleDate, checkinDates };
}
