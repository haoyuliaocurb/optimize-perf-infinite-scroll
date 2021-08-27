import { memo } from 'react';
import NavBar from './NavBar';
import Main from './Main';
import StyledApp from '../styles/app/StyledApp';

const App = memo(() => {
  return (
    <StyledApp>
      <NavBar />
      <Main />
    </StyledApp>
  );
});

export default App;
