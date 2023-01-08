import statBarImg from "assets/img/statbar.png";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 630px;
  height: 100%;
  align-self: center;
  margin-top: 23px;

  img {
    float: left;
    border-radius: 5px;
    margin-right: 15px;
    cursor: pointer;
  }

  .info {
    display: flex;
    flex-direction: column;

    .top {
      display: flex;
      span {
        font-size: 12px;
        &.title {
          cursor: pointer;
          color: #ffffff;
        }
        &.singer {
          color: #9b9b9b;
          margin-right: 15px;
        }
        &:hover {
          text-decoration: underline;
        }
      }
      .mv {
        margin-left: 5px;
        margin-right: 15px;
      }
    }
    .bottom {
      display: flex;
      .ant-slider {
        width: 466px;
        margin-top: 0;
        // 进度条
        .ant-slider-rail {
          //background-color: orangered !important;
          background-image: url("${statBarImg}");
          height: 9px;
          top: 2px;
          border-radius: 5px;
        }
        // 已读取进度条
        .ant-slider-track {
          top: 2px;
          height: 9px;
          background: url("${statBarImg}") no-repeat 0 -66px;
        }
        .ant-slider-handle::after {
          box-shadow: 0 0 0 2px ${(props) => props.theme.color.darkRed} !important;
        }
      }

      .time {
        span {
          font-size: 12px;
          line-height: 10px;
          vertical-align: top;
          color: #797979;
        }
        span:nth-of-type(1) {
          color: #a1a1a1;
        }
      }
    }
  }
`;
