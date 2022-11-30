/**
 * @time 2022/11/30
 * @auth xiaoqinvar
 * @desc
 */
import { Wrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IContentHeaderV1Props {
  children?: ReactNode;
}

const ContentHeaderV1: FC<IContentHeaderV1Props> = (props) => {
  return <Wrapper>header-v1</Wrapper>;
};

export default memo(ContentHeaderV1);
