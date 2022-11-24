/**
 * @time 2022/11/9 18:54
 * @author xiaoqinvar
 * @desc recommend store
 * @dependence
 */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getBanner } from "@/service/api/module/recommend.service";

interface IRecommendState {
  count: number;
}
const initialState: IRecommendState = {
  count: 0,
};
const recommendReducer = createSlice({
  initialState,
  name: "recommendReducer",
  reducers: {},
});

export default recommendReducer.reducer;

/**
 * 获取banner请求
 */
export const getBannerReq = createAsyncThunk("banner", async (arg, { getState }) => {
  const res = await getBanner();
  console.log("banner", res);
  return res;
});
