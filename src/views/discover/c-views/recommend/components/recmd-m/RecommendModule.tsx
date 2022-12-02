/**
 * @time 2022/11/30
 * @auth xiaoqinvar
 * @desc
 */
import { hotTagList } from "./RecommendModule.enum";
import { ModuleWrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import Theme from "@/assets/mixin/theme";
import ContentHeaderV1 from "@/components/content-header-v1/ContentHeaderV1";

interface IRecommendModuleProps {
  children?: ReactNode;
}

const RecommendModule: FC<IRecommendModuleProps> = (props) => {
  return (
    <ModuleWrapper theme={Theme}>
      <ContentHeaderV1 tagList={hotTagList} />
    </ModuleWrapper>
  );
};

export default memo(RecommendModule);
