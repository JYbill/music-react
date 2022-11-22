export interface IHeaderList {
  type: "router" | "link";
  url: string;
  name: string;
}

const headerLists: IHeaderList[] = [
  {
    type: "router",
    url: "/",
    name: "",
  },
  {
    type: "router",
    url: "/discover",
    name: "发现音乐",
  },
  {
    type: "router",
    url: "/my",
    name: "我的音乐",
  },
  {
    type: "router",
    url: "/focus",
    name: "关注",
  },
  {
    type: "link",
    url: "https://music.163.com/store/product",
    name: "商城",
  },
  {
    type: "link",
    url: "https://music.163.com/st/musician",
    name: "音乐人",
  },
  {
    type: "router",
    url: "/download",
    name: "下载客户端",
  },
];
export default headerLists;
