/**
 * @time 2022/12/2
 * @auth xiaoqinvar
 * @desc
 */
import { Wrapper } from "./style";
import { Button } from "antd";

import React, { memo } from "react";
import type { FC, ReactNode } from "react";

import Theme from "@/assets/mixin/theme";

interface ILoginCardProps {
  children?: ReactNode;
}

const LoginCard: FC<ILoginCardProps> = (props) => {
  return (
    <Wrapper className="bg-gary-v1" theme={Theme}>
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <Button className="bg-btn-red">用户登陆</Button>
    </Wrapper>
  );
};

export default memo(LoginCard);
