/**
 * @Description: 播放歌曲store
 * @Author: 小钦var
 * @Date: 2023/1/8 16:03
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ISong, getSong } from "@/service/api/module/player.service";

interface IPlayerState {
  currSong?: ISong;
}

const initialState: IPlayerState = {
  currSong: undefined,
};
const recommendReducer = createSlice({
  initialState,
  name: "recommendReducer",
  reducers: {
    setCurrSongAction(state, { payload }) {
      state.currSong = payload;
    },
  },
});

export const { setCurrSongAction } = recommendReducer.actions;
export default recommendReducer.reducer;

export const getSongReq = createAsyncThunk("banner", async (id: number, { dispatch }) => {
  getSong(id).then((res) => {
    dispatch(setCurrSongAction(res.songs[0]));
  });
});
