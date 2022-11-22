import styled from "styled-components";

const menuHeight = `30px`;
const menuLineHeight = `
  height: ${menuHeight};
  line-height: calc(${menuHeight} - 7px);
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
        padding: 0 30px;
        color: #fff;
        ${menuLineHeight}

        :nth-of-type(1) {
          margin-left: 175px;
        }
      }
    }
  }
`;
