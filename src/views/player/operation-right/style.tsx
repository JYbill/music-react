import styled from "styled-components";

export const Wrapper = styled.div`
  width: 215px;
  height: 49px;
  display: flex;
  align-items: center;

  div {
    margin-right: 5px;
  }

  .sprite-continuous {
    &.cycle {
      background-position-x: -63px;
      &:hover {
        background-position-x: -90px;
      }
    }
    &.random {
      background-position-x: -63px;
      background-position-y: -250px;
      &:hover {
        background-position-x: -90px;
      }
    }
  }
`;
