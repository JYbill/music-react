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

interface ISongListRes extends IResponse {
  result: IRecommendSong[];
}
export interface IRecommendSong {
  id: number;
  name: string;
  picUrl: string;
  playCount: number;
}

interface INewDiscRes extends IResponse {
  albums: INewDisc[];
}
export interface INewDisc {
  id: number;
  name: string;
  picUrl: string;
  artists: { name: string }[];
}

interface ITopListRes extends IResponse {
  list: ITopList[];
}
export interface ITopList {
  id: number;
  name: string;
}

interface IDetailTopListRes extends IResponse<IDetailTopList> {
  playlist: IDetailTopList;
}
export interface IDetailTopList {
  id: number;
  name: string;
  coverImgUrl: string;
  description: string;
  tracks: {
    id: number;
    name: string;
  }[];
}

/**
 * GET 获取banner数据
 */
export async function getBanner() {
  return await Request.get<IBannerResp>("/banner");
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

/**
 * 推荐页面 - 新碟上架板块
 */
export async function getNewDiscList() {
  const res = await Request.get<INewDiscRes>("/album/newest");
  // 只需要10条
  if (res.albums.length > 10) {
    res.albums.length = 10;
  }
  return res;
}

/**
 * 获取所有榜单
 */
export async function getTopList() {
  const res = await Request.get<ITopListRes>("/toplist");
  return res;
}

/**
 * 获取榜详情，根据榜单id
 * @param rankId
 */
export async function getDetailTopList(rankId: number) {
  const res = await Request.get<IDetailTopListRes>("/playlist/detail", {
    params: {
      id: rankId,
    },
  });
  return res;
}
