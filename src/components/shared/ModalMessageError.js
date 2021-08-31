/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { React } from 'react';
import StyledModalMessage from '../../styles/shared/StyledModalMessage';
import IconShared from '../../styles/shared/IconShared';

const ModalMessageError = ({ message, ModolMessagErrorRef, mask, IconInfo = 1 }) => {
  const isShowMask = !mask ? 0 : 1;
  const isShowIconInfo = !IconInfo ? 0 : 1;
  return (
    <StyledModalMessage ref={ModolMessagErrorRef} className="op-zero" isShowMask={isShowMask} isShowIconInfo={isShowIconInfo}>
      <div className="messageBox">
        {!isShowIconInfo ? (
          <div />
        ) : (
          <div className="img">
            <IconShared.Close />
          </div>
        )}
        <p className="message center">{message}</p>
      </div>
    </StyledModalMessage>
  );
};

export default ModalMessageError;
