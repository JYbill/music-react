/**
 * @time 2022/11/22
 * @auth xiaoqinvar
 * @desc
 */
import { NavHeadWrapper } from "./style";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

import Theme from "@/assets/mixin/theme";
import { discoverHeaderConfig } from "@/config/discover.config";

interface INavHeaderProps {
  children?: ReactNode;
}

const NavHeader: FC<INavHeaderProps> = (props) => {
  /**
   * 渲染nav菜单栏
   */
  const renderNav = () => {
    return (
      <div className="content">
        {discoverHeaderConfig.map((item) => {
          return (
            <NavLink className="item" key={item.url} to={item.url}>
              {item.name}
            </NavLink>
          );
        })}
      </div>
    );
  };

  return (
    <NavHeadWrapper theme={Theme}>
      <div className="nav-header">
        {/* 主要内容 */}
        {renderNav()}
      </div>
    </NavHeadWrapper>
  );
};

export default memo(NavHeader);
