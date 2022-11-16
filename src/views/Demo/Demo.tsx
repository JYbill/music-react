/**
 * @time 2022/11/15
 * @auth xiaoqinvar
 * @desc 课堂演示页面
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import ClassComp from "@/views/Demo/ClassComp";

interface IDemoProps {
  children?: ReactNode;
}

const Demo: FC<IDemoProps> = (props) => {
  return (
    <div>
      <h1>课堂演示案例</h1>
      <ClassComp name="xqv" />
    </div>
  );
};

export default memo(Demo);
