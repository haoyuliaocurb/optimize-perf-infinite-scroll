import styled from '@emotion/styled/macro';
import STYLES_CONSTANT from './STYLES_CONSTANT';

const StyledMain = styled.main`
  position: relative;
  z-index: 0;
  width: 100%;
  height: 100%;
  padding-top: ${STYLES_CONSTANT.app.barHeight};
`;

export default StyledMain;
