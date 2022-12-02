/**
 * @time 2022/11/30
 * @auth xiaoqinvar
 * @desc
 */
import { Wrapper } from "./style";

import React, { Fragment, memo } from "react";
import type { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import Theme from "@/assets/mixin/theme";

interface ITag {
  name: string;
  url: string;
}

interface IContentHeaderV1Props {
  children?: ReactNode;
  tagList?: ITag[];
}

const ContentHeaderV1: FC<IContentHeaderV1Props> = (props) => {
  return (
    <Wrapper theme={Theme}>
      <span className="spirit-cycle"></span>
      <h2 className="title">热门推荐</h2>
      <div className="tag-continer">{renderTagList()}</div>
      <Link to="/discover/playlist/" className="more spirit-arrow-r">
        更多
      </Link>
    </Wrapper>
  );

  function renderTagList() {
    return props.tagList?.map((item) => {
      return (
        <Fragment key={item.name}>
          <a href={item.url}>{item.name}</a>
          <span>|</span>
        </Fragment>
      );
    });
  }
};

export default memo(ContentHeaderV1);
