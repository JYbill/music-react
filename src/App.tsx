import React, { Suspense, useEffect } from "react";
import { useRoutes } from "react-router-dom";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import routers from "@/router/index.router";
import { useAppDispatch } from "@/store/index.store";
import { getSongReq } from "@/store/player.store";
import Player from "@/views/player/player";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getSongReq(22821100));
  }, []);

  return (
    <div className="App">
      <Header />

      <Suspense fallback="">
        <div className="main">{useRoutes(routers)}</div>
      </Suspense>

      <Player />
      <Footer />
    </div>
  );
}

export default App;
