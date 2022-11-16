/**
 * @time 2022/11/6 12:02
 * @author xiaoqinvar
 * @desc router入口
 * @dependence
 */
import React, { lazy } from "react";
import type { NonIndexRouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Album from "@/views/discover/c-views/album/Album";

const Discover = lazy(() => import("@/views/discover/Discover"));
const Recommend = lazy(() => import("@/views/discover/c-views/recommend/Recommend"));
const Artist = lazy(() => import("@/views/discover/c-views/artist/Artist"));
const Radio = lazy(() => import("@/views/discover/c-views/radio/Radio"));
const Rank = lazy(() => import("@/views/discover/c-views/rank/Rank"));
const My = lazy(() => import("@/views/my/My"));
const Download = lazy(() => import("@/views/download/Download"));
const Focus = lazy(() => import("@/views/focus/Focus"));
const Demo = lazy(() => import("@/views/Demo/Demo"));

const routers: NonIndexRouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover/",
        element: <Navigate to="/discover/recommend" />,
      },
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/artist",
        element: <Artist />,
      },
      {
        path: "/discover/radio",
        element: <Radio />,
      },
      {
        path: "/discover/rank",
        element: <Rank />,
      },
      {
        path: "/discover/album",
        element: <Album />,
      },
    ],
  },
  {
    path: "/my",
    element: <My />,
  },
  {
    path: "/focus",
    element: <Focus />,
  },
  {
    path: "/download",
    element: <Download />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
];
export default routers;
