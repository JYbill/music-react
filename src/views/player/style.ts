import playerBarImg from "assets/img/playbar.png";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 52px;
  background-image: url("${playerBarImg}");
  background-repeat: repeat-x;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
