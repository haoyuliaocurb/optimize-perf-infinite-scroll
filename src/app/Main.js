import { memo } from 'react';
import StyledMain from '../styles/app/StyledMain';
import HomePage from '../pages/HomePage';

const Main = memo(() => {
  return (
    <StyledMain>
      <HomePage />
    </StyledMain>
  );
});

export default Main;
