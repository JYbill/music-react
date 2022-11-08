/**
 * @time 2022/11/8
 * @auth xiaoqinvar
 * @desc 电台子页面
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IRadioProps {
  children?: ReactNode;
}

const Radio: FC<IRadioProps> = (props) => {
  return <div>电台</div>;
};

export default memo(Radio);
