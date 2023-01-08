/**
 * @time 2022/11/9 18:54
 * @author xiaoqinvar
 * @desc recommend store
 * @dependence
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getBanner,
  getDetailTopList,
  getNewDiscList,
  getSongList,
  getTopList,
} from "@/service/api/module/recommend.service";
import type {
  IBanner,
  IDetailTopList,
  INewDisc,
  IRecommendSong,
} from "@/service/api/module/recommend.service";

interface IRecommendState {
  banners: IBanner[];
  songList: IRecommendSong[];
  newDiscList: INewDisc[];
  topDetailList: IDetailTopList[];
}

const initialState: IRecommendState = {
  banners: [],
  songList: [],
  newDiscList: [],
  topDetailList: [],
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
    setNewDiscListAction(state, { payload }) {
      state.newDiscList = payload;
    },
    setTopDetailListAction(state, { payload }) {
      state.topDetailList = payload;
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
export const { setBannerAction, setSongListAction, setNewDiscListAction, setTopDetailListAction } =
  recommendReducer.actions;

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
  getBannerHTTP(dispatch);
});
const getBannerHTTP = async (dispatch: any) => {
  const res = await getBanner();
  dispatch(setBannerAction(res.banners));
};

export const getSongListReq = createAsyncThunk("songList", async (arg, { dispatch }) => {
  getSongListHTTP(dispatch);
});
const getSongListHTTP = async (dispatch: any) => {
  const res = await getSongList();
  dispatch(setSongListAction(res.result));
};

export const getNewDiscListReq = createAsyncThunk("newDiscList", async (arg, { dispatch }) => {
  getNewDiscListHTTP(dispatch);
});
const getNewDiscListHTTP = async (dispatch: any) => {
  const res = await getNewDiscList();
  dispatch(setNewDiscListAction(res.albums));
};

// 根据所有表单获取对应每个表单的详细数据
export const getTopListReq = createAsyncThunk("topList", async (arg, { dispatch }) => {
  getTopListHTTP(dispatch);
});

const rankList = ["飙升榜", "新歌榜", "原创榜"];
const rankSortMap: {
  [key: string]: number;
} = {
  ["飙升榜"]: 0,
  ["新歌榜"]: 1,
  ["原创榜"]: 2,
};
const getTopListHTTP = async (dispatch: any) => {
  const topListRes = await getTopList();
  const topInfoList = topListRes.list.filter((item) => rankList.includes(item.name));
  const topDetailAsyncList = topInfoList.map(({ id }) => getDetailTopList(id));
  const topDetailList = await Promise.all(topDetailAsyncList);
  // console.log(topDetailList);
  const formatTopDetailList = topDetailList.map((item) => item.playlist);
  for (const [index, item] of formatTopDetailList.entries()) {
    const sortIndex = rankSortMap[item.name]; // 当前榜单应该处在数组的位置
    if (sortIndex === index) {
      continue;
    }
    // 数组内容指针互换
    const exchangeItem = formatTopDetailList[sortIndex];
    formatTopDetailList[index] = exchangeItem;
    formatTopDetailList[sortIndex] = item;
  }
  // console.log(formatTopDetailList);
  dispatch(setTopDetailListAction(formatTopDetailList));
};
