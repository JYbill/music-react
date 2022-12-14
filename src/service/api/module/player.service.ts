/**
 * @Description: 播放歌曲api
 * @Author: 小钦var
 * @Date: 2023/1/8 15:57
 */
import Request from "../index.request";

interface ISongResp extends IResponse {
  songs: ISong[];
}
export interface ISong {
  id: number;
  name: string;
  al: ISongInfo;
  ar: IArtist[];
}
interface ISongInfo {
  id: number;
  name: string;
  picUrl: string;
}
export interface IArtist {
  id: number;
  name: string;
}

interface IMusicRes extends IResponse {
  data: IMusic[];
}
export interface IMusic {
  id: number;
  url: string;
  size: number;
  type: string;
  level: string;
  time: number;
}

interface ILyricRes extends IMusicRes {
  lrc: ILyric;
}
interface ILyric {
  version: number;
  lyric: string;
}

/**
 * 根据id获取歌曲详情
 * @param id
 */
export async function getSong(id: number) {
  return Request.get<ISongResp>("/song/detail", {
    params: {
      ids: id,
    },
  });
}

export async function getMusicUrl(id: number) {
  return Request.get<IMusicRes>("song/url/v1", {
    params: {
      id,
    },
  });
}

/**
 * 根据歌曲id获取对应的歌词
 * @param sid 歌曲id
 */
export async function getLyric(sid: number) {
  return Request.get<ILyricRes>("/lyric", {
    params: { id: sid },
  });
}
