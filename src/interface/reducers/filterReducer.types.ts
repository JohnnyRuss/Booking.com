import { CalendarValueT } from "../../components/Layouts/Calendar/Calendar";

export interface StateT {
  dateRange?: CalendarValueT;
  users?: UserT;
}
interface UserT {
  adults?: number;
  children?: number;
  rooms?: number;
}
export type SetDateT = CalendarValueT;
export type SetUserT = UserT;
