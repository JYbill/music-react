import { IOperationLeftProps } from "./operation-left";
import styled from "styled-components";

export const Wrapper = styled.div<IOperationLeftProps>`
  width: 140px;
  display: flex;

  div {
    margin-right: 8px;
    margin-top: 5px;
  }

  .play {
    background-position-y: ${(props) => (props.isPlaying ? null : "-206px")};
  }
`;
