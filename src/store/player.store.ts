/**
 * @Description: 播放歌曲store
 * @Author: 小钦var
 * @Date: 2023/1/8 16:03
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PlayMode } from "@/enum/index.enum";
import type { IMusic, ISong } from "@/service/api/module/player.service";
import { getLyric, getMusicUrl, getSong } from "@/service/api/module/player.service";
import { RootState } from "@/store/index.store";
import type { LyricType } from "@/utils/player.util";
import PlayerUtil from "@/utils/player.util";

interface IPlayerState {
  currSong?: ISong; // 当前歌曲基本信息
  musicInfo?: IMusic; // 当前歌曲详情
  lyricList: LyricType[]; // 当前歌曲的歌词列表
  playerList: ISong[]; // 播放列表
  playIndex: number; // 正在播放的索引
  playMode: PlayMode;
}

const mock1 = {
  name: "海阔天空",
  id: 347230,
  ar: [
    {
      id: 11127,
      name: "Beyond",
    },
  ],
  al: {
    id: 34209,
    name: "海阔天空",
    picUrl: "https://p1.music.126.net/8y8KJC1eCSO_vUKf2MyZwA==/109951165796899183.jpg",
  },
};
const mock2 = {
  name: "Modal Soul",
  id: 22821101,
  ar: [
    {
      id: 162138,
      name: "Nujabes",
    },
    {
      id: 15772,
      name: "Uyama Hiroto",
    },
  ],
  al: {
    id: 2098348,
    name: "Modal Soul",
    picUrl: "https://p2.music.126.net/WLvdvrEImEi_sw-fm88B3Q==/109951165498611137.jpg",
  },
};
const initialState: IPlayerState = {
  currSong: undefined,
  musicInfo: undefined,
  lyricList: [],
  playerList: [mock1, mock2],
  playIndex: -1,
  playMode: PlayMode.CONTINUOUS,
};
const recommendReducer = createSlice({
  initialState,
  name: "playerReducer",
  reducers: {
    setCurrSongAction(state, { payload }) {
      state.currSong = payload;
    },
    setMusicInfoAction(state, { payload }) {
      state.musicInfo = payload;
    },
    setLyricAction(state, { payload }) {
      state.lyricList = payload;
    },
    setPlayListAction(state, { payload }) {
      state.playerList = payload;
    },
    setPlayIndexAction(state, { payload }) {
      state.playIndex = payload;
    },
    setPlayModeAction(state, { payload }) {
      state.playMode = payload;
    },
  },
});

export const {
  setCurrSongAction,
  setMusicInfoAction,
  setLyricAction,
  setPlayIndexAction,
  setPlayListAction,
  setPlayModeAction,
} = recommendReducer.actions;
export default recommendReducer.reducer;

export const getSongReq = createAsyncThunk<void, number, { state: RootState }>(
  "song",
  async (id: number, { dispatch, getState }) => {
    const { playerList } = getState().playerReducer;
    const findSongIndex = playerList.findIndex((item) => item.id === id);

    // 获取当前歌曲信息
    await getSong(id).then((res) => {
      dispatch(setCurrSongAction(res.songs[0]));
    });

    // 当前播放歌曲不在播放列表里 => 网络请求歌曲，插入进歌曲列表进第一个，索引为0
    if (findSongIndex < 0) {
      const res = await getSong(id);
      const currSong = res.songs[0];
      const newPlayList = [...playerList];
      newPlayList.unshift(currSong);
      dispatch(setCurrSongAction(currSong));
      dispatch(setPlayIndexAction(0));
      dispatch(setPlayListAction(newPlayList));
    } else {
      // 存在，设置索引
      dispatch(setPlayIndexAction(findSongIndex));
    }
    // 获取当前歌曲url详情
    getMusicUrl(id).then((res) => {
      const data = res.data[0];
      // console.log("music", data);
      dispatch(setMusicInfoAction(data));
    });
    getLyric(id).then((res) => {
      const lyricStr = PlayerUtil.lyric2Array(res.lrc.lyric);
      // console.log("lyric", lyricStr);
      dispatch(setLyricAction(lyricStr));
    });
  },
);
