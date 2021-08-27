import { memo } from 'react';
import StyledNavBar from '../styles/app/StyledNavBar';

const NavBar = memo(() => {
  return (
    <StyledNavBar>
      <div className="content">
        <div className="brand">
          <p className="developerName">Hao-yu Liao</p>
          <p className="purpose">Optimize performance of infinite scroll</p>
        </div>
      </div>
    </StyledNavBar>
  );
});

export default NavBar;
