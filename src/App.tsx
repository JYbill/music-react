import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import routers from "@/router/index.router";

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
