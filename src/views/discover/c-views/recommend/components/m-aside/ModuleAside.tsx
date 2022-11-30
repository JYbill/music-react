/**
 * @time 2022/11/30
 * @auth xiaoqinvar
 * @desc
 */
import { AsideWrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IModuleAsideProps {
  children?: ReactNode;
}

const ModuleAside: FC<IModuleAsideProps> = (props) => {
  return <AsideWrapper>aka</AsideWrapper>;
};

export default memo(ModuleAside);
