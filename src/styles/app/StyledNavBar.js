import styled from '@emotion/styled/macro';
import STYLES_CONSTANT from './STYLES_CONSTANT';

const StyledNavBar = styled.nav`
  position: absolute;
  top: 0;
  z-index: 5;
  width: 100%;
  height: ${STYLES_CONSTANT.app.barHeight};
  background-color: black;
  .content {
    margin: auto;
    max-width: 800px;
    width: 100%;
    height: 100%;
    padding: 0 60px;
    display: flex;
    align-items: center;
  }

  .brand {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    height: 80px;
    > p {
      color: white;
      width: 100%;
    }
    > .developerName {
      font-size: 26px;
      margin-bottom: 6px;
    }
    > .purpose {
    }
  }
`;

export default StyledNavBar;
