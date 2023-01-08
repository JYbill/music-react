/**
 * @Description: 播放歌曲store
 * @Author: 小钦var
 * @Date: 2023/1/8 16:03
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getMusicUrl, getSong } from "@/service/api/module/player.service";
import type { IMusic, ISong } from "@/service/api/module/player.service";

interface IPlayerState {
  currSong?: ISong;
  musicInfo?: IMusic;
}

const initialState: IPlayerState = {
  currSong: undefined,
  musicInfo: undefined,
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
  },
});

export const { setCurrSongAction, setMusicInfoAction } = recommendReducer.actions;
export default recommendReducer.reducer;

export const getSongReq = createAsyncThunk("song", async (id: number, { dispatch }) => {
  getSong(id).then((res) => {
    dispatch(setCurrSongAction(res.songs[0]));
  });
  getMusicUrl(id).then((res) => {
    const data = res.data[0];
    console.log("music", data);
    dispatch(setMusicInfoAction(data));
  });
});
