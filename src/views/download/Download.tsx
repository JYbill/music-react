import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IDownloadProps {
  name: string;
  age?: number;
  children: ReactNode;
}

const Download: FC<IDownloadProps> = (props) => {
  return (
    <div>
      <div>download</div>
      <div>{props.children}</div>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </div>
  );
};

export default memo(Download);
