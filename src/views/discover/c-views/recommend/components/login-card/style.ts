import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 126px;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  p {
    color: ${(props) => props.theme.color.gary6};
    padding-bottom: 12px;
    width: 205px;
    font-size: inherit;
    line-height: 22px;
  }

  .ant-btn {
    width: 100px;
    color: #fff !important;
    border: none;
  }
`;
