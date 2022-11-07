import React from "react";
import { useRoutes } from "react-router-dom";
import routers from "@/router/index.router";

function App() {
  return useRoutes(routers);
}

export default App;
