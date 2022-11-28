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
