/**
 * @time 2022/11/9 18:54
 * @author xiaoqinvar
 * @desc 计数器store
 * @dependence
 */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// 这样定义可以让推断更准确，如果是一个元组类型，ts类型可以更精确的提示类型，否则只会返回一个数组类型！
interface IInitState {
  count: number;
}
const initialState: IInitState = {
  count: 0,
};
const counterReducer = createSlice({
  initialState,
  name: "counter",
  reducers: {
    incrementAction(state) {
      state.count += 1;
    },
    decrementAction(state) {
      state.count -= 1;
    },
    // 指定payload具体的类型
    changeAction(state, { payload }: PayloadAction<number>) {
      state.count = payload;
    },
  },
});

export default counterReducer.reducer;
export const { incrementAction, decrementAction } = counterReducer.actions;
