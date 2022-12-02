/**
 * @time 2022/11/30
 * @auth xiaoqinvar
 * @desc
 */
import { AsideWrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import LoginCard from "@/views/discover/c-views/recommend/components/login-card/LoginCard";

interface IModuleAsideProps {
  children?: ReactNode;
}

const ModuleAside: FC<IModuleAsideProps> = (props) => {
  return (
    <AsideWrapper>
      <LoginCard />
    </AsideWrapper>
  );
};

export default memo(ModuleAside);
