import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface ICounterState {
  value: number;
}

const data = localStorage.getItem("counter");

const initialState: ICounterState = {
  value: data ? Number(data) : 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("counter", String(state.value));
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("counter", String(state.value));
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      localStorage.setItem("counter", String(state.value));
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
