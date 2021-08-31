/* eslint-disable react/no-array-index-key */
import { memo, useState, useEffect, useRef, useCallback } from 'react';
import StyledVirtualizedList from '../../styles/HomePage/StyledVirtualizedList';
import NormalCard from './NormalCard';
import STYLES_CONSTANT from '../../styles/app/STYLES_CONSTANT';
import { removePx } from '../../utils/self-library';
import ModalMessageError from '../shared/ModalMessageError';

const NUM_CARD_PER_PAGE = 30;
const CARD_FULL_WIDTH =
  removePx(STYLES_CONSTANT.homePage.cardWidth) + removePx(STYLES_CONSTANT.homePage.cardMarginLeft);
const CARD_FULL_HEIGHT =
  removePx(STYLES_CONSTANT.homePage.cardHeight) +
  removePx(STYLES_CONSTANT.homePage.cardMarginBottom);

const VirtualizedList = memo(() => {
  const ModolMessagErrorRef = useRef(null);
  const [isScrollRefSet, setIsScrollRefSet] = useState(0);
  const scrollRef = useRef(null);
  const isTouchScrollEnd = useRef(false);
  const page = useRef(0);
  // eslint-disable-next-line no-unused-vars
  const [cardsPerRow, setCardsPerRow] = useState(null);
  const clientHeight = useRef(null);
  const calcScrollHeight = () => {
    return ((page.current * NUM_CARD_PER_PAGE) / cardsPerRow) * CARD_FULL_HEIGHT;
  };
  const scrollHeight = useRef(null);
  const scrollTop = useRef(0);
  const minScrollTopDiff = Math.ceil(clientHeight.current / CARD_FULL_HEIGHT) * CARD_FULL_HEIGHT;
  const calcCardsShowInfo = () => {
    if (isTouchScrollEnd.current) {
      const endIdx = Math.ceil(scrollHeight.current / CARD_FULL_HEIGHT) * cardsPerRow;
      const startIdx =
        endIdx - Math.ceil((clientHeight.current / CARD_FULL_HEIGHT) * cardsPerRow) - 1;
      return [startIdx, endIdx];
    }
    const endIdx =
      Math.ceil((scrollTop.current + clientHeight.current) / CARD_FULL_HEIGHT) * cardsPerRow;
    const startIdx = Math.floor(scrollTop.current / CARD_FULL_HEIGHT) * cardsPerRow;
    return [startIdx, endIdx];
  };
  // eslint-disable-next-line no-unused-vars
  const [forceUpdateValue, forceUpdate] = useState([]);
  const [cardsShowInfo, setCardsShowInfo] = useState(null);
  const [pics, setPics] = useState(() => {
    return Array.from({ length: NUM_CARD_PER_PAGE }).map(() => []);
  });
  const isAllPicsLoaded = useRef(false);
  const isScrollFinished = useRef(true);
  const isFetchFailed = useRef(false);
  const updatePics = async () => {
    const showModolMessagError = () => {
      ModolMessagErrorRef.current.classList.remove('op-zero');
      ModolMessagErrorRef.current.addEventListener('transitionend', () => {
        ModolMessagErrorRef.current.classList.add('op-zero');
      });
    };
    // console.log('isScrollFinished.current: ', isScrollFinished.current);
    // console.log('isFetchFailed.current: ', isFetchFailed.current);
    // console.log('page.current: ', page.current);
    try {
      if (isAllPicsLoaded.current || !isScrollFinished.current) {
        return;
      }
      isScrollFinished.current = false;
      if (!isFetchFailed.current) {
        page.current += 1;
        scrollHeight.current = calcScrollHeight();
        // console.log('scrollHeight.current: ', scrollHeight.current);
        if (page.current !== 1) {
          setPics((prePics) => {
            return [...prePics, ...Array.from({ length: 30 }).map(() => [])];
          });
        }
      }
      const res = await fetch(`https://picsum.photos/v2/list?page=${page.current}`);
      if (!res.ok) {
        showModolMessagError();
        isFetchFailed.current = true;
        isScrollFinished.current = true;
        return;
      }
      const newPics = await res.json();
      if (newPics.length === 0) {
        isAllPicsLoaded.current = true;
        page.current -= 1;
        scrollHeight.current = (pics.length / cardsPerRow) * CARD_FULL_HEIGHT;
      }
      setPics((prePics) => {
        isScrollFinished.current = true;
        isTouchScrollEnd.current = false;
        isFetchFailed.current = false;
        if (page.current === 1) {
          return [...newPics];
        }
        return prePics.slice(0, prePics.length - 30).concat(newPics);
      });
    } catch {
      showModolMessagError();
      isFetchFailed.current = true;
      isScrollFinished.current = true;
    }
  };
  const getCards = () => {
    const cardsShowArr = [];
    // console.log('cardsShowInfo: ', cardsShowInfo, 'pics.length: ', pics.length);
    const [startIdx, endIdx] = cardsShowInfo;
    for (let i = startIdx; i < endIdx; i += 1) {
      // if (i > page.current * NUM_CARD_PER_PAGE) {
      //   // eslint-disable-next-line no-continue
      //   continue;
      // }
      // console.log('i: ', i, 'page.current * NUM_CARD_PER_PAGE: ', page.current * NUM_CARD_PER_PAGE);
      const picData = pics[i];
      const author = !picData.author ? '' : picData.author;
      const url = !picData.download_url ? '' : picData.download_url;

      const top = Math.floor(i / cardsPerRow) * CARD_FULL_HEIGHT;
      const getLeft = () => {
        const orderInRow = i % cardsPerRow;
        if (orderInRow === 0) {
          return removePx(STYLES_CONSTANT.homePage.cardMarginLeft);
        }
        return removePx(STYLES_CONSTANT.homePage.cardMarginLeft) + orderInRow * CARD_FULL_WIDTH;
      };
      const left = getLeft();

      cardsShowArr.push(
        <NormalCard
          style={{ position: 'absolute', top: `${top}px`, left: `${left}px` }}
          key={i}
          index={i}
          author={author}
          url={url}
        />,
      );
    }
    return cardsShowArr;
  };
  const handleScroll = useCallback(
    (e) => {
      scrollTop.current = e.currentTarget.scrollTop;
      // eslint-disable-next-line prettier/prettier
      if (clientHeight.current + scrollTop.current > scrollHeight.current * 0.7) {
        updatePics();
      }
      if (scrollHeight.current - scrollTop.current < minScrollTopDiff) {
        isTouchScrollEnd.current = true;
      } else {
        isTouchScrollEnd.current = false;
      }
      setCardsShowInfo(calcCardsShowInfo());
    },
    [
      isTouchScrollEnd.current,
      clientHeight.current,
      scrollTop.current,
      scrollHeight.current,
      minScrollTopDiff,
    ],
  );
  const updateCardsPerRow = () => {
    const bodyClientWidth = document.body.clientWidth;
    if (bodyClientWidth > 800) {
      setCardsPerRow(3);
    } else if (bodyClientWidth > 600) {
      setCardsPerRow(2);
    } else {
      setCardsPerRow(1);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', () => {
      updateCardsPerRow();
      scrollHeight.current = calcScrollHeight();
      if (!scrollRef.current) {
        return;
      }
      clientHeight.current = scrollRef.current.clientHeight;
    });
  }, []);
  useEffect(() => {
    setCardsShowInfo(calcCardsShowInfo());
  }, [cardsPerRow]);
  useEffect(() => {
    if (!isScrollRefSet) {
      return;
    }
    clientHeight.current = scrollRef.current.clientHeight;
    scrollHeight.current = calcScrollHeight();
    scrollTop.current = scrollRef.current.scrollTop;
    setCardsShowInfo(calcCardsShowInfo());
    updatePics();
    if (isScrollRefSet < 2) {
      setIsScrollRefSet(2);
    }
  }, [isScrollRefSet]);
  useEffect(() => {
    if (!scrollRef.current) {
      return;
    }
    setIsScrollRefSet(1);
    updateCardsPerRow();
  }, []);
  useEffect(() => {
    forceUpdate([]);
    if (clientHeight.current + scrollTop.current > scrollHeight.current * 0.7) {
      updatePics();
    }
  }, [pics]);
  return (
    <StyledVirtualizedList
      onScroll={handleScroll}
      scrollHeight={scrollHeight.current}
      scrollWidth={
        cardsPerRow * CARD_FULL_WIDTH + removePx(STYLES_CONSTANT.homePage.cardMarginLeft)
      }
      ref={scrollRef}
    >
      <div className="scroll">{isScrollRefSet < 2 ? '' : getCards()}</div>
      <ModalMessageError
        message={
          <span>
            網路連線問題
            <br />
            使資料載入不全
          </span>
        }
        ModolMessagErrorRef={ModolMessagErrorRef}
      />
    </StyledVirtualizedList>
  );
});

export default VirtualizedList;
