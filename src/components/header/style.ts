import styled from "styled-components";
import spiritTopBar from "@/assets/img/spirit-topbar.png";

const headerLineHeight = `line-height: 70px`;
const headerTop = `top: 30%;`;
export const HeadWrapper = styled.div`
  .header {
    width: 100%;
    background: #242424;

    .content {
      width: 1100px;
      height: 70px;
      ${headerLineHeight};
      margin: 0 auto;
      display: flex;

      // 超链接
      a.item {
        width: auto;
        max-width: 97px;
        text-align: center;
        color: #ccc;
        padding: 0 20px;

        // logo
        :nth-of-type(1) {
          width: 100px;
          max-width: 150px;
          background-image: url(${spiritTopBar});
          background-position: 0 0;
          padding-right: 70px;
          padding-left: 0;

          :hover {
            background-color: #242424;
          }
        }

        // 下载客户端
        :nth-last-of-type(1) {
          position: relative;

          :after {
            content: "";
            width: 30px;
            height: 20px;
            background-image: url(${spiritTopBar});
            background-position: -190px 0;
            display: block;
            position: absolute;
            right: -21px;
            top: 30%;
          }
        }

        :hover {
          background-color: #000;
          color: #fff;
        }
      }

      // 搜索输入框
      .search-continer {
        .search {
          font-size: 12px;
          position: relative;
          padding: 0 0 0 30px;
          height: 32px;
          width: 130px;
          border-radius: 30px;
          border: none;
          outline: none;
          margin-left: 60px;

          ::placeholder {
            font-size: 10px;
            color: ${(props) => props.theme.garyColor};
          }
        }

        .search-icon {
          display: block;
          position: relative;
          left: 60px;
          top: -55px;
          width: 30px;
          height: 30px;
          background-image: url(${spiritTopBar});
          background-position: 0, 100px;
        }
      }

      // 创作中心按钮
      .creat-center.ant-btn {
        position: relative;
        color: #ccc;
        border-radius: 20px;
        background-color: #212121;
        ${headerTop};
        margin-left: 10px;
        border: 1px solid #464646;

        :hover {
          color: #ccc;
          border-color: #ccc;
        }
      }

      // 登陆
      .login {
        margin-top: 3px;
        font-size: 12px;
        margin-left: 20px;
        color: ${(props) => props.theme.garyColor};
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
