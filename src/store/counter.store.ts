/**
 * @time 2022/11/9 18:54
 * @author xiaoqinvar
 * @desc 计数器store
 * @dependence
 */
import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  initialState: {
    count: 0,
  },
  name: "counter",
  reducers: {
    incrementAction(state) {
      state.count += 1;
    },
    decrementAction(state) {
      state.count -= 1;
    },
  },
});

export default counterReducer.reducer;
export const { incrementAction, decrementAction } = counterReducer.actions;
