import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  StateT,
  SetDateT,
  SetUserT,
} from "../../interface/reducers/filterReducer.types";

const initialState: StateT = {
  dateRange: null,
  users: {
    adults: NaN,
    children: NaN,
    rooms: NaN,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setDateRange(state, { payload }: PayloadAction<SetDateT>) {
      state.dateRange = payload;
    },

    setUsers(state, { payload }: PayloadAction<SetUserT>) {
      state.users = payload;
    },
  },
});

export default filterSlice.reducer;
export const { setDateRange, setUsers } = filterSlice.actions;
