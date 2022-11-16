import React, { Suspense, useEffect } from "react";
import { Link, useRoutes } from "react-router-dom";
import routers from "@/router/index.router";
import { useAppSelector, useAppDispatch } from "@/store/index.store";
import { decrementAction, incrementAction } from "@/store/counter.store";
import { shallowEqual } from "react-redux";
import request from "@/service/api/index.request";
import ClassComp from "@/views/Demo/ClassComp";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

function App() {
  // 获取store且进行浅比较优化
  // const { counter } = useAppSelector((state) => state, shallowEqual);
  // const dispatch = useAppDispatch();

  // demo例子🌰
  // useEffect(() => {
  //   async function getBannerHTTP() {
  //     const res = await request.get("/banner/");
  //     console.log(res);
  //   }
  //   getBannerHTTP();
  // }, []);

  return (
    <div className="App">
      <Header />

      <Suspense fallback="">
        <div className="main">{useRoutes(routers)}</div>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
