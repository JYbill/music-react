import styled from "styled-components";

export const ModuleWrapper = styled.div`
  width: 690px;
  padding: 20px;
  border: 1px solid ${(props) => props.theme.color.borderGary};

  .hot-recommend {
    margin-bottom: 35px;
    .song-ls {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      margin-left: -40px;
    }
  }
`;
