import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  padding: 0 5px 5px 5px;
  border-bottom: 2px solid ${(props) => props.theme.color.darkRed};

  .title {
    font-size: 20px;
    font-weight: normal;
    margin-right: 16px;
    line-height: 28px;
  }

  .tag-continer {
    font-size: 12px;
    color: ${(props) => props.theme.color.gary6};
    a {
      color: ${(props) => props.theme.color.gary6};
      font-size: inherit;
    }
    span {
      font-size: inherit;
      margin: 0 14px;
      &:nth-last-child(1) {
        display: none;
      }
    }
  }

  .more {
    font-size: 12px;
    position: absolute;
    right: 33px;
    bottom: 9px;
  }
`;
