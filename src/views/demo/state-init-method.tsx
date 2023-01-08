/**
 * @time 2023/1/3
 * @auth xiaoqinvar
 * @desc
 */
import React, { memo, useEffect, useState } from "react";
import type { FC, ReactNode } from "react";

interface IStateInitMethodProps {
  person: any;
  children?: ReactNode;
}

const stateInitMethod: FC<IStateInitMethodProps> = (props) => {
  console.log("rerender.");
  return (
    <div>
      <hr />
      <p>name is {props.person.name}</p>
    </div>
  );
};

export default memo(stateInitMethod);
// export default stateInitMethod;
