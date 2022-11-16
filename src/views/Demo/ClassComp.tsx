/**
 * @time 2022/11/15
 * @auth xiaoqinvar
 * @desc 课堂演示：Class组件类型定义
 */
import React, { PureComponent } from "react";
import type { ReactNode } from "react";

interface IProps {
  name: string;
  age?: number;
}
interface IState {
  msg: string;
}
interface ISnapshot {
  address: string;
}
class ClassComp extends PureComponent<IProps, IState> {
  state = {
    msg: "hello react",
  };

  /*  getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>) {
    return { address: "洛杉矶" };
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: ISnapshot,
  ) {
    console.log(snapshot);
  }*/

  render(): ReactNode {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props?.age || "未传递"}</p>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default ClassComp;
