/**
 * @time 2022/11/16
 * @auth xiaoqinvar
 * @desc
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { HeadWrapper } from "./style";

interface IHeaderProps {
  children?: ReactNode;
}

const Header: FC<IHeaderProps> = (props) => {
  return (
    <HeadWrapper>
      <div className="content">
        <Link to="/discover">发现</Link>
        <Link to="/focus">关注</Link>
        <Link to="/my">我的</Link>
        <Link to="/download">下载</Link>
      </div>
    </HeadWrapper>
  );
};

export default memo(Header);
