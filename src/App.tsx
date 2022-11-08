import React, { Suspense } from "react";
import { Link, useRoutes } from "react-router-dom";
import routers from "@/router/index.router";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现</Link>
        <Link to="/focus">关注</Link>
        <Link to="/my">我的</Link>
        <Link to="/download">下载</Link>
      </div>

      <Suspense fallback="">
        <div className="main">{useRoutes(routers)}</div>
      </Suspense>
    </div>
  );
}

export default App;
