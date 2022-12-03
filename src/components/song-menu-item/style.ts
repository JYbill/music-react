import styled, { ThemeProps } from "styled-components";

import Theme from "@/assets/mixin/theme";

export const Wrapper = styled.div`
  width: 140px;
  margin-left: 42px;
  margin-bottom: 35px;

  .cover {
    cursor: pointer;
    position: relative;

    .mask {
      position: absolute;
    }

    .mask-bottom {
      width: 100%;
      height: 27px;
      position: absolute;
      bottom: 3px;
      left: 0;

      .count {
        font-size: 12px;
        line-height: 30px;
        color: ${(props: ThemeProps<typeof Theme>) => props.theme.color.garyColor};
        margin-left: 10px;
      }

      .icon {
        position: absolute;
        right: 10px;
        top: 7px;
      }
    }
  }

  .song-desc {
    line-height: 20px;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
