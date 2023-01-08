/**
 * @time 2023/1/8
 * @auth xiaoqinvar
 * @desc
 */
import { Wrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

export interface IOperationLeftProps {
  children?: ReactNode;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const operationLeft: FC<IOperationLeftProps> = (props) => {
  const { setIsPlaying, isPlaying } = props;
  const clickPlayBtn = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <Wrapper {...props}>
      <div className="sprite-pre"></div>
      <div className="sprite-play play" onClick={clickPlayBtn}></div>
      <div className="sprite-next"></div>
    </Wrapper>
  );
};

export default memo(operationLeft);
