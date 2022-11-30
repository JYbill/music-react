/**
 * @time 2022/11/30
 * @auth xiaoqinvar
 * @desc
 */
import { ModuleWrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import ContentHeaderV1 from "@/components/content-header-v1/ContentHeaderV1";

interface IRecommendModuleProps {
  children?: ReactNode;
}

const RecommendModule: FC<IRecommendModuleProps> = (props) => {
  return (
    <ModuleWrapper>
      <ContentHeaderV1 />
    </ModuleWrapper>
  );
};

export default memo(RecommendModule);
