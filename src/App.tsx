import React, { Suspense, useEffect } from "react";
import { Link, useRoutes } from "react-router-dom";
import routers from "@/router/index.router";
import { useAppSelector, useAppDispatch } from "@/store/index.store";
import { decrementAction, incrementAction } from "@/store/counter.store";
import { shallowEqual } from "react-redux";
import request from "@/service/api/index.request";

function App() {
  // 获取store且进行浅比较优化
  const { counter } = useAppSelector((state) => state, shallowEqual);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getBannerHTTP() {
      const res = await request.get("/banner/");
      console.log(res);
    }
    getBannerHTTP();
  }, []);
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现</Link>
        <Link to="/focus">关注</Link>
        <Link to="/my">我的</Link>
        <Link to="/download">下载</Link>
      </div>
      <h2>当前定时器: {counter.count}</h2>
      <button onClick={() => dispatch(incrementAction())}>+1</button>
      <button onClick={() => dispatch(decrementAction())}>-1</button>

      <Suspense fallback="">
        <div className="main">{useRoutes(routers)}</div>
      </Suspense>
    </div>
  );
}

export default App;
