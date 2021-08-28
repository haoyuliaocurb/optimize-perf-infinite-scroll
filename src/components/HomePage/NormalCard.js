import { memo, useEffect, useRef } from 'react';
import StyledNormalCard from '../../styles/HomePage/StyledNormalCard';
import DotSpinLoader from '../shared/DotSpinLoader';

// eslint-disable-next-line no-unused-vars
const NormalCard = memo(({ author, url }) => {
  const imgRef = useRef(null);
  const loaderRef = useRef(null);
  const DotSpinLoaderRef = useRef(null);
  const handleImgLoad = () => {
    loaderRef.current.classList.add('op-zero');
    DotSpinLoaderRef.current.classList.add('dp-none');
  };
  useEffect(() => {
    imgRef.current.addEventListener('load', () => {
      handleImgLoad();
    });
  }, [url]);
  return (
    <StyledNormalCard>
      <div ref={loaderRef} className="loader">
        <DotSpinLoader DotSpinLoaderRef={DotSpinLoaderRef} />
      </div>
      <p className="authorTag">{!author ? '' : 'author'}</p>
      <p className="authorName">{!author ? '' : author}</p>
      <img ref={imgRef} alt="" src={url} />
    </StyledNormalCard>
  );
});

export default NormalCard;
