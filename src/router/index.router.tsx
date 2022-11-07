/**
 * @time 2022/11/6 12:02
 * @author xiaoqinvar
 * @desc router入口
 * @dependence
 */
import React from "react";
import type { NonIndexRouteObject } from "react-router-dom";
import Discover from "@/views/discover/Discover";
import My from "@/views/my/My";
import Download from "@/views/download/Download";

const routers: NonIndexRouteObject[] = [
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Discover />,
      },
    ],
  },
  {
    path: "/my",
    element: <My />,
  },
  {
    path: "/friend",
    element: <Discover />,
  },
  {
    path: "/download",
    element: (
      <Download name="xqv" age={23}>
        <div>default</div>
      </Download>
    ),
  },
];
export default routers;
