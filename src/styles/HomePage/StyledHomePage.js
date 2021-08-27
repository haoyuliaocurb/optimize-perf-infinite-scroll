import styled from '@emotion/styled/macro';
import STYLES_CONSTANT from '../app/STYLES_CONSTANT';

const StyledHomePage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${STYLES_CONSTANT.color.beige100};
  .scrollContainer {
    margin: auto;
    width: 100%;
    max-width: 800px;
    height: 100%;
    overflow-y: scroll;
    @media (max-width: 800px) {
      max-width: 600px;
    }
    @media (max-width: 600px) {
      max-width: 400px;
    }
    > .scroll {
      padding-top: 70px;
      width: 100%;
      min-height: 100%;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      @media (min-width: 801px) {
        > :not(div:nth-of-type(3n + 1)) {
          margin-left: 24px;
        }
      }
      @media (min-width: 600px) and (max-width: 800px) {
        > :not(div:nth-of-type(2n + 1)) {
          margin-left: 24px;
        }
      }
      > div {
        margin-bottom: 60px;
      }
    }
  }
`;

export default StyledHomePage;
