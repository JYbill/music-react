/**
 * @time 2022/11/15
 * @auth xiaoqinvar
 * @desc 课堂演示页面
 */
import React, { memo, useState } from "react";
import type { FC, ReactNode } from "react";

import ClassComp from "@/views/demo/class-comp";
import StateInitMethod from "@/views/demo/state-init-method";

interface IDemoProps {
  children?: ReactNode;
}

const Demo: FC<IDemoProps> = (props) => {
  const [num, setNum] = useState(0);
  const [person, setPerson] = useState({
    name: "xqv",
    age: 23,
  });

  return (
    <div>
      <h1>课堂演示案例</h1>
      <h2>ECMA可选链</h2>
      {/*<ClassComp name="xqv" />*/}

      <h2>测试memo比较</h2>
      <p>father num is {num}</p>
      <button onClick={() => setNum(num + 1)}>num + 1</button>
      <button onClick={() => setPerson({ name: "xqv", age: 18 })}>修改person</button>
      <StateInitMethod person={person} />
    </div>
  );
};

export default memo(Demo);
