import styled from '@emotion/styled/macro';

const StyledVirtualizedList = styled.div`
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
  display: flex;
  justify-content: center;
  > .scroll {
    position: relative;
    margin-top: 70px;
    width: ${({ scrollWidth }) => {
      if (!scrollWidth) {
        return '0px';
      }
      return `${scrollWidth}px`;
    }};
    height: ${({ scrollHeight }) => {
      if (!scrollHeight) {
        return '0px';
      }
      return `${scrollHeight}px`;
    }};
  }
`;

export default StyledVirtualizedList;
