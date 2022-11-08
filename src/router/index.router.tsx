/**
 * @time 2022/11/6 12:02
 * @author xiaoqinvar
 * @desc router入口
 * @dependence
 */
import React, { lazy } from "react";
import type { NonIndexRouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Discover = lazy(() => import("@/views/discover/Discover"));
const My = lazy(() => import("@/views/my/My"));
const Download = lazy(() => import("@/views/download/Download"));
const Focus = lazy(() => import("@/views/focus/Focus"));

const routers: NonIndexRouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/discover" />,
  },
  {
    path: "/discover",
    element: <Discover />,
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
    element: (
      <Download>
        <div>default</div>
      </Download>
    ),
  },
];
export default routers;
