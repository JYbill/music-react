/**
 * @file: entire.ts
 * @author: xiaoqinvar
 * @desc：entire 接口例子🌰
 * @date: 2022-10-29 13:04:43
 */
import Request from "../index.request";

interface IBannerResp extends IResponse {
  banners: IBanner[];
}

export interface IBanner {
  targetId: number;
  imageUrl: string;
  typeTitle: string;
}

/**
 * GET 获取banner数据
 */
export async function getBanner() {
  return await Request.get<IBannerResp>("/banner");
}

interface ISongListRes extends IResponse {
  result: IRecommendSong[];
}
export interface IRecommendSong {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
}
/**
 * 推荐歌单
 */
export async function getSongList(limit = 8) {
  return await Request.get<ISongListRes>("/personalized", {
    params: {
      limit,
    },
  });
}
