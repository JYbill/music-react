import styled from "styled-components";

import downloadImg from "@/assets/img/swiper-download.png";

/**
 * 轮播图整体样式
 */
export const SwiperWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
`;

/**
 * 轮播图样式
 */
const carouselWidth = `730px`;
const carouselHeight = `285px`;
export const SwiperContent = styled.div`
  width: 982px;
  height: ${carouselHeight};
  margin: 0 auto;
  display: flex;
  position: relative;

  // 轮播图
  .ant-carousel {
    width: ${carouselWidth};

    .item {
      img {
        width: 100%;
        height: ${carouselHeight};
      }
    }

    .dot {
      bottom: -3px;
      li {
        border-radius: 50px;
        width: 7px !important;
        height: 7px !important;
        margin: 0 8px;
        //background-color: rgba(255, 255, 255);

        &:hover {
          button {
            opacity: 1;
            background-color: ${(props) => props.theme.color.themeRed};
          }
        }

        button {
          height: 100%;
          border-radius: 50px;
        }

        &.slick-active {
          button {
            background-color: ${(props) => props.theme.color.themeRed};
          }
        }
      }
    }
  }

  // 轮播图控制
  .opera {
    width: 37px;
    height: 63px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &.left {
      left: -75px;
    }

    &.right {
      right: -75px;
    }
  }
`;

// 轮播图右侧容器
export const SwiperRight = styled.div`
  width: calc(100% - ${carouselWidth});
  background-image: url(${downloadImg});
  position: relative;

  .download-bg {
    width: 215px;
    height: 56px;
    position: absolute;
    left: 8%;
    top: 65%;
    border-radius: 3px;

    :hover {
      background-image: url(${downloadImg});
      background-position: -1px -289px;
      background-repeat: no-repeat;
      cursor: pointer;
    }
  }

  // 下载p标签提示
  .download-info {
    font-size: 12px;
    color: #8d8d8d;
    text-align: center;
    position: absolute;
    bottom: 17px;
    left: 12px;
  }

  // 阴影背景
  .shadow {
    width: 20px;
    height: ${carouselHeight};
    display: block;
    position: absolute;
  }

  .left {
    left: -20px;
  }

  .right {
    right: -20px;
  }
`;
