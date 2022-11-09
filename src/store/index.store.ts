/**
 * @time 2022/11/8 21:44
 * @author xiaoqinvar
 * @desc redux入口文件
 * @dependence
 */
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter.store";
import { useSelector, useDispatch } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// 创建store
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// 类型
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
