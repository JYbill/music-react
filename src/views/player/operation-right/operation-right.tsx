/**
 * @time 2023/1/8
 * @auth xiaoqinvar
 * @desc
 */
import { Wrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IOperationRightProps {
  children?: ReactNode;
}

const operationLeft: FC<IOperationRightProps> = (props) => {
  return (
    <Wrapper>
      <div className="sprite-lyric"></div>
      <div className="sprite-collect-v2"></div>
      <div className="sprite-share"></div>
      <div className="sprite-division"></div>
      <div className="sprite-voice"></div>
      <div className="sprite-cyclic"></div>
      <div className="sprite-song-ls"></div>
    </Wrapper>
  );
};

export default memo(operationLeft);
