import { memo, useEffect, useRef } from 'react';
import StyledNormalCard from '../../styles/HomePage/StyledNormalCard';
import DotSpinLoader from '../shared/DotSpinLoader';

// eslint-disable-next-line no-unused-vars
const NormalCard = memo(({ index, author, url, style }) => {
  const imgRef = useRef(null);
  const NormalCardRef = useRef(null);
  const loaderRef = useRef(null);
  const DotSpinLoaderRef = useRef(null);
  const handleImgLoad = () => {
    // console.log(true);
    loaderRef.current.classList.add('op-zero');
    DotSpinLoaderRef.current.classList.add('dp-none');
  };
  const handleImgError = () => {
    loaderRef.current.classList.add('op-zero');
    DotSpinLoaderRef.current.classList.add('dp-none');
    NormalCardRef.current.classList.add('handleImgError');
  };
  useEffect(() => {
    // console.log(`<NormalCard key=${index === undefined ? null : index} /> mount`);
    imgRef.current.addEventListener('load', handleImgLoad);
    imgRef.current.addEventListener('error', handleImgError);
    const imgRefCurrent = imgRef.current;
    return () => {
      imgRefCurrent.removeEventListener('load', handleImgLoad);
      imgRefCurrent.removeEventListener('error', handleImgError);
      // console.log(`<NormalCard key=${index === undefined ? null : index} /> unmount`);
    };
  }, [url]);
  return (
    <StyledNormalCard style={style} ref={NormalCardRef}>
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
