/**
 * @time 2022/11/16
 * @auth xiaoqinvar
 * @desc
 */
import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { HeadWrapper } from "./style";
import { ThemeProvider } from "styled-components";
import Theme from "@/assets/mixin/theme";
import { Button } from "antd";
import headerData from "@/config/header-data.config";

interface IHeaderProps {
  children?: ReactNode;
}

const Header: FC<IHeaderProps> = (props) => {
  /**
   * 渲染header路由与超链接选项
   */
  const renderHeaderItem = () => {
    return headerData.map((item, index) => {
      const className = "item";
      return item.type === "router" ? (
        <NavLink
          className={({ isActive }) => {
            let addClassName = className;
            addClassName += isActive ? " active spirit-active-arrow" : "";
            return addClassName;
          }}
          key={index}
          to={item.url}
        >
          {item.name}

          {/* hot精灵图 */}
          {index === headerData.length - 1 ? <span className="hot spirit-hot"></span> : null}
        </NavLink>
      ) : (
        <a className={className} key={index} href={item.url} rel="noreferrer" target="_blank">
          {item.name}
        </a>
      );
    });
  };

  /**
   * 打开创作中心
   */
  const openCreatCenter = () => {
    window.open("https://music.163.com/#/login?targetUrl=%2Fcreatorcenter");
  };

  return (
    <ThemeProvider theme={Theme}>
      <HeadWrapper>
        <div className="header">
          <div className="content">
            {/* 路由渲染 */}
            {renderHeaderItem()}

            {/* 搜索框 */}
            <div className="search-continer">
              <input className="search" type="text" placeholder="音乐/视频/电台/用户" />
              <span className="search-icon"></span>
            </div>

            {/* header右侧 */}
            <Button className="creat-center" onClick={() => openCreatCenter()}>
              创作中心
            </Button>
            <a className="login" href="" onClick={(e) => e.preventDefault()}>
              登陆
            </a>
          </div>
        </div>
      </HeadWrapper>
    </ThemeProvider>
  );
};

export default memo(Header);
