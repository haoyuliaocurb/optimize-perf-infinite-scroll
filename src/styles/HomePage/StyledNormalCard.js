import styled from '@emotion/styled/macro';
import STYLES_CONSTATNT from '../app/STYLES_CONSTANT';

const StyledNormalCard = styled.div`
  position: relative;
  width: ${STYLES_CONSTATNT.homePage.cardWidth};
  height: ${STYLES_CONSTATNT.homePage.cardHeight};
  flex-shrink: 0;
  border-bottom: solid rgba(0, 0, 0, 0.3) 1px;
  display: flex;
  align-content: flex-end;
  flex-wrap: wrap;
  padding-bottom: 12px;

  > * {
    flex-shrink: 0;
  }
  > p {
    width: 100%;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  > .authorTag {
    font-weight: 500;
    font-style: italic;
    margin-bottom: 6px;
    font-size: 12px;
  }
  > img {
    position: absolute;
    top: 0;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    height: 60%;
  }
  > .loader {
    position: absolute;
    z-index: 5;
    top: 0;
    width: 100%;
    height: 60%;
    background-color: ${STYLES_CONSTATNT.color.beige100};
    transition: all 1s;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyledNormalCard;
