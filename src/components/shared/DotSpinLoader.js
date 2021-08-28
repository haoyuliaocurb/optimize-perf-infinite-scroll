import { memo } from 'react';
import StyledDotSpinLoader from '../../styles/shared/StyledDotSpinLoader';

const DotSpinLoader = memo(({ DotSpinLoaderRef }) => {
  return (
    <StyledDotSpinLoader ref={DotSpinLoaderRef} className="DotSpinLoader" data-title=".dot-spin">
      <div className="stage">
        <div className="dot-spin" />
      </div>
    </StyledDotSpinLoader>
  );
});

export default DotSpinLoader;
