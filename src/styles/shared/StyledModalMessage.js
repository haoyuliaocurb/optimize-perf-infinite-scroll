/* eslint-disable prettier/prettier */
import styled from '@emotion/styled/macro';
import STYLES_CONSTANT from '../app/STYLES_CONSTANT';

const StyledModalMessage = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${({ isShowMask }) => !isShowMask ? 'transparent' : 'rgba(0, 0, 0, 0.5)'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 1;
  transition: all 1s;
  &.op-zero {
    opacity: 0 !important;
  }

  > .messageBox {
    position: relative;
    bottom: 40px;
    width: 200px;
    min-height: 200px;
    border-radius: 20px;
    background-color: ${STYLES_CONSTANT.color.transWhite95};
    box-shadow: 0 3px 10px 5px ${STYLES_CONSTANT.color.transGray5};
    display: ${({ isShowIconInfo }) => !isShowIconInfo ? 'flex' : 'block'};
    justify-content: center;
    align-items: center;

    > .img {
      position: relative;
      top: 14px;
      width: 100%;
      height: 120px;
      /* border: black solid 1px; */
      display: flex;
      justify-content: center;
      align-items: center;

      > svg {
        width: 80px;
        height: 80px;
        fill: ${STYLES_CONSTANT.color.gray300};
        * {
          fill: ${STYLES_CONSTANT.color.gray300};
        }
      }
    }
    > .message {
      padding: 20px 40px;
      font-weight: 400;
      text-align: center;
      line-height: 22px;
      color: ${STYLES_CONSTANT.color.gray400};
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default StyledModalMessage;
