import styled from '@emotion/styled/macro';

const StyledNormalCard = styled.div`
  position: relative;
  width: 220px;
  height: 200px;
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
`;

export default StyledNormalCard;
