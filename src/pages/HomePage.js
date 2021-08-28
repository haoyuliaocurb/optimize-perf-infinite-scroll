import { memo, useState, useEffect, useRef } from 'react';
import StyledHomePage from '../styles/HomePage/StyledHomePage';
import NormalCard from '../components/HomePage/NormalCard';

const HomePage = memo(() => {
  const [pics, setPics] = useState(() => {
    return Array.from({ length: 30 }).map(() => []);
  });
  const page = useRef(0);
  const isAllPicsLoaded = useRef(false);
  const scrollContainerRef = useRef(null);
  const isScrollFinished = useRef(true);
  const updatePics = async () => {
    try {
      if (isAllPicsLoaded.current || !isScrollFinished.current) {
        return;
      }
      isScrollFinished.current = false;
      page.current += 1;
      // console.log('page.current: ', page.current);
      if (page.current !== 1) {
        setPics((prePics) => {
          return [...prePics, ...Array.from({ length: 30 }).map(() => [])];
        });
      }
      const res = await fetch(`https://picsum.photos/v2/list?page=${page.current}`);
      const newPics = await res.json();
      if (newPics.length === 0) {
        isAllPicsLoaded.current = true;
      }
      setPics((prePics) => {
        isScrollFinished.current = true;
        if (page.current === 1) {
          return [...newPics];
        }
        return prePics.slice(0, prePics.length - 30).concat(newPics);
      });
    } catch {
      //
    }
  };
  const getCards = () => {
    return pics.map((pic, index) => {
      const author = !pic.author ? '' : pic.author;
      const url = !pic.download_url ? '' : pic.download_url;
      // eslint-disable-next-line react/no-array-index-key
      return <NormalCard key={index} author={author} url={url} />;
    });
  };
  const handleScroll = () => {
    const sclTarget = scrollContainerRef.current;
    // console.log('clientHeight: ', scrollContainerRef.current.clientHeight);
    // console.log('scrollHeight: ', scrollContainerRef.current.scrollHeight);
    // console.log('scrollTop: ', scrollContainerRef.current.scrollTop);
    if (sclTarget.clientHeight + sclTarget.scrollTop > sclTarget.scrollHeight * 0.7) {
      updatePics();
    }
  };
  useEffect(() => {
    updatePics();
  }, []);
  useEffect(() => {
    // console.log('pics.length: ', pics.length);
  }, [pics]);
  return (
    <StyledHomePage>
      <div className="scrollContainer" onScroll={handleScroll} ref={scrollContainerRef}>
        <div className="scroll">{getCards()}</div>
      </div>
    </StyledHomePage>
  );
});

export default HomePage;
