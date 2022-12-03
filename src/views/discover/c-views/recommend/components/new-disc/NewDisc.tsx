/**
 * @time 2022/12/3
 * @auth xiaoqinvar
 * @desc
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import ContentHeaderV1 from "@/components/content-header-v1/ContentHeaderV1";
import { Wrapper } from "@/views/discover/c-views/recommend/components/new-disc/style";

interface INewDiscProps {
  children?: ReactNode;
}

const NewDisc: FC<INewDiscProps> = (props) => {
  return <Wrapper>new disc</Wrapper>;
};

export default memo(NewDisc);
