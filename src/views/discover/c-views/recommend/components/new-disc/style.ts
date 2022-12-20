import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #d3d3d3;
  margin: 20px 0;
  padding: 20px 0;

  .ant-carousel {
  }

  .swiper-page {
    height: 184px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;

    .new-disc-item {
      //flex: 1;
      margin-left: 20px;
      width: 115px;
      position: relative;

      .bg {
        height: 100px;
        background-size: 100px;
        background-repeat: no-repeat;
      }
      p {
        font-size: 12px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      p.artists {
        color: ${(props) => props.theme.color.garyColor};
      }
    }
  }
`;
