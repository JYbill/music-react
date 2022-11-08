import React, { memo } from "react";
import type { FC, ReactNode } from "react";

interface IDownloadProps {
  children?: ReactNode;
}

const Download: FC<IDownloadProps> = (props) => {
  return (
    <div>
      <div>download</div>
      <div>{props.children}</div>
    </div>
  );
};

export default memo(Download);
