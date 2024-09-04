import { createSlice, Dispatch } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  count :0
};

export const state = createSlice({
  name: "state",
  initialState,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
  },
});


export const {setCount } = state.actions;




export default state.reducer;