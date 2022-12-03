/**
 * @time 2022/11/9 18:54
 * @author xiaoqinvar
 * @desc recommend store
 * @dependence
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getBanner, getSongList } from "@/service/api/module/recommend.service";
import type { IBanner, IRecommendSong } from "@/service/api/module/recommend.service";

interface IRecommendState {
  banners: IBanner[];
  songList: IRecommendSong[];
}

const initialState: IRecommendState = {
  banners: [],
  songList: [],
};
const recommendReducer = createSlice({
  initialState,
  name: "recommendReducer",
  reducers: {
    setBannerAction(state, { payload }) {
      state.banners = payload;
    },
    setSongListAction(state, { payload }) {
      state.songList = payload;
    },
  },

  // 方式一：粒度更细
  /*extraReducers: (builder) => {
    builder
      .addCase(getBannerReq.pending, () => {
        // console.log("loading");
      })
      .addCase(getBannerReq.rejected, () => {
        // console.log("reject");
      })
      .addCase(getBannerReq.fulfilled, (state, { payload }) => {
        state.banners = payload;
      });
  },*/
});

export default recommendReducer.reducer;
export const { setBannerAction, setSongListAction } = recommendReducer.actions;

/**
 * 获取banner请求
 */
// 方式一：
/*export const getBannerReq = createAsyncThunk("banner", async (arg, { getState }) => {
  const res = await getBanner();
  console.log("banner", res);
  return res.banners;
});*/
// 方式二：
export const getBannerReq = createAsyncThunk("banner", async (arg, { dispatch }) => {
  const res = await getBanner();
  dispatch(setBannerAction(res.banners));
});

export const getSongListReq = createAsyncThunk("songList", async (arg, { dispatch }) => {
  const res = await getSongList();
  dispatch(setSongListAction(res.result));
});
