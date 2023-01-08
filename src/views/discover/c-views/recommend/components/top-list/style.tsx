import topListImg from "assets/img/top-list-bg.png";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 688px;
  height: 472px;
  margin-top: 20px;
  border-right: 1px solid #c3c3c3;
  background-image: url("${topListImg}");
  display: flex;

  .top-list-item {
    &:nth-of-type(2),
    &:nth-of-type(3) {
      padding-left: 2px;
    }
    width: 230px;

    .header {
      display: flex;
      height: 100px;
      padding-left: 20px;
      padding-top: 20px;
      img {
        margin-right: 10px;
      }
      .operation {
        h4 {
          font-weight: 500;
          margin-bottom: 15px;
        }
        a {
          margin-right: 10px;
        }
      }
    }

    .container {
      .detail-item {
        cursor: pointer;
        height: 32px;
        line-height: 32px;
        &:hover {
          span:nth-of-type(2) {
            text-decoration: underline;
          }
        }

        .top3 {
          color: ${(props) => props.theme.color.txtRed};
        }

        span:nth-of-type(1) {
          margin-left: 17px;
          font-size: 16px;
          display: inline-block;
          width: 35px;
          text-align: center;
        }
        span:nth-of-type(2) {
          font-size: 12px;
        }
      }

      .more {
        text-align: right;
        font-size: 12px;
        margin-right: 10px;
      }
    }
  }
`;
