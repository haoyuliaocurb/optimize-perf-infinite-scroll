import { memo, useState, useEffect } from 'react';
import StyledHomePage from '../styles/HomePage/StyledHomePage';
import NormalCard from '../components/HomePage/NormalCard';

const HomePage = memo(() => {
  const [pics, setPics] = useState([]);
  const updatePics = async () => {
    try {
      const res = await fetch('https://picsum.photos/v2/list?page=1&limit=15');
      const newPics = await res.json();
      setPics((prePics) => {
        return [...prePics, ...newPics];
      });
    } catch {
      //
    }
  };
  // eslint-disable-next-line consistent-return
  const getCards = () => {
    if (!pics) {
      // eslint-disable-next-line react/no-array-index-key
      return Array.from({ length: 12 }).map((value, index) => <NormalCard key={index} />);
    }
    return pics.map((pic) => {
      const { id, author, download_url: url } = pic;
      return <NormalCard key={id} author={author} url={url} />;
    });
  };
  useEffect(() => {
    updatePics();
  }, []);
  // useEffect(() => {
  //   console.log('pics in useEffect: ', pics);
  // }, [pics]);
  return (
    <StyledHomePage>
      <div className="scrollContainer">
        <div className="scroll">{getCards()}</div>
      </div>
    </StyledHomePage>
  );
});

export default HomePage;
