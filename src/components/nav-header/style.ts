import styled from "styled-components";

const menuHeight = `30px`;
const menuLineHeight = `
  height: ${menuHeight};
  line-height: calc(${menuHeight} - 12px);
  margin-top: 3px;
`;
export const NavHeadWrapper = styled.div`
  .nav-header {
    width: 100%;
    background-color: ${(props) => props.theme.color.themeRed};

    .content {
      margin: 0 auto;
      width: 1100px;
      height: ${menuHeight};
      display: flex;
      justify-content: flex-start;

      .item {
        font-size: 12px;
        text-align: center;
        padding: 1px 13px 0 13px;
        margin: 0 17px 0 17px;
        color: #fff;
        ${menuLineHeight}

        :nth-of-type(1) {
          margin-left: 190px;
        }

        &.active {
          height: 20px;
          background-color: ${(props) => props.theme.color.darkRed};
          border-radius: 15px;
        }
        &:hover {
          height: 20px;
          background-color: ${(props) => props.theme.color.darkRed};
          border-radius: 15px;
        }
      }
    }
  }
`;
