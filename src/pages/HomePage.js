import { memo } from 'react';
import StyledHomePage from '../styles/HomePage/StyledHomePage';
import VirtualizedList from '../components/HomePage/VirtualizedList';

const HomePage = memo(() => {
  return (
    <StyledHomePage>
      <VirtualizedList />
    </StyledHomePage>
  );
});

export default HomePage;
