/**
 * @time 2022/11/8 21:44
 * @author xiaoqinvar
 * @desc redux入口文件
 * @dependence
 */
import playerReducer from "./player.store";
import recommendReducer from "./recommend.store";
import { configureStore } from "@reduxjs/toolkit";

import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

// 创建store
const store = configureStore({
  reducer: {
    recommendReducer: recommendReducer,
    playerReducer: playerReducer,
  },
});

// 类型
export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
