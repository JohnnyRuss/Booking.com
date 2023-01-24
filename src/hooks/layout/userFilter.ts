import { useAppDispatch } from "../../store/hook";

import {
  SetDateT,
  SetUserT,
} from "../../interface/reducers/filterReducer.types";
import { setDateRange, setUsers } from "../../store/reducers/filterReducer";

export default function useFilter() {
  const dispatch = useAppDispatch();

  function handleSetUser(param: SetUserT) {
    dispatch(setUsers(param));
  }

  function handleSetDateRange(param: SetDateT) {
    dispatch(setDateRange(param));
  }

  return { handleSetDateRange, handleSetUser };
}
