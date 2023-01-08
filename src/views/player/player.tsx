/**
 * @time 2023/1/8
 * @auth xiaoqinvar
 * @desc
 */
import OperationLeft from "./operation-left/operation-left";
import Progress from "./progress/progress";

import React, { memo, useEffect } from "react";
import type { FC, ReactNode } from "react";

import { useAppDispatch } from "@/store/index.store";
import { getSongReq } from "@/store/player.store";
import OperationRight from "@/views/player/operation-right/operation-right";
import { Wrapper } from "@/views/player/style";

interface IPlayerProps {
  children?: ReactNode;
}

const player: FC<IPlayerProps> = (props) => {
  // hooks
  const dispatch = useAppDispatch();
  useEffect(() => {
    // 轮播图网络请求
    dispatch(getSongReq(347230));
  }, []);

  console.log();
  return (
    <Wrapper>
      <OperationLeft></OperationLeft>
      <Progress></Progress>
      <OperationRight></OperationRight>
    </Wrapper>
  );
};

export default memo(player);
