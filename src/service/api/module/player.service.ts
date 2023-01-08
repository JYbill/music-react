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
  id: string;
  name: string;
  al: ISongInfo;
}
interface ISongInfo {
  id: number;
  name: string;
  picUrl: string;
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
