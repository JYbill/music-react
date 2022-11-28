import type { IHeaderList } from "./header-data.config";

export const discoverHeaderConfig: IHeaderList[] = [
  {
    type: "router",
    url: "recommend",
    name: "推荐",
  },
  {
    type: "router",
    url: "rank",
    name: "排行榜",
  },
  {
    type: "router",
    url: "playlist",
    name: "歌单",
  },
  {
    type: "router",
    url: "radio",
    name: "主播电台",
  },
  {
    type: "router",
    url: "artist",
    name: "歌手",
  },
  {
    type: "router",
    url: "album",
    name: "新碟上架",
  },
];
