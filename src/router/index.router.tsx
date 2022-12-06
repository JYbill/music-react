/**
 * @time 2022/11/6 12:02
 * @author xiaoqinvar
 * @desc router入口
 * @dependence
 */
import React, { lazy } from "react";
import type { NonIndexRouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Album from "@/views/discover/c-views/album/album";

const Discover = lazy(() => import("@/views/discover/discover"));
const Recommend = lazy(() => import("@/views/discover/c-views/recommend/recommend"));
const Playlist = lazy(() => import("@/views/discover/c-views/playlist/playlist"));
const Artist = lazy(() => import("@/views/discover/c-views/artist/artist"));
const Radio = lazy(() => import("@/views/discover/c-views/radio/radio"));
const Rank = lazy(() => import("@/views/discover/c-views/rank/rank"));
const My = lazy(() => import("@/views/my/my"));
const Download = lazy(() => import("@/views/download/download"));
const Focus = lazy(() => import("@/views/focus/focus"));
const Demo = lazy(() => import("@/views/Demo/demo"));

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
        path: "/discover/rank",
        element: <Rank />,
      },
      {
        path: "/discover/playlist",
        element: <Playlist />,
      },
      {
        path: "/discover/radio",
        element: <Radio />,
      },
      {
        path: "/discover/artist",
        element: <Artist />,
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
