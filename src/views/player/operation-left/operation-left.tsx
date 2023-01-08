/**
 * @time 2023/1/8
 * @auth xiaoqinvar
 * @desc
 */
import { Wrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IOperationLeftProps {
  children?: ReactNode;
}

const operationLeft: FC<IOperationLeftProps> = (props) => {
  return (
    <Wrapper>
      <div className="sprite-pre"></div>
      <div className="sprite-play"></div>
      <div className="sprite-next"></div>
    </Wrapper>
  );
};

export default memo(operationLeft);
