import { memo } from 'react';
import StyledNormalCard from '../../styles/HomePage/StyledNormalCard';

const NormalCard = memo(({ author, url }) => {
  return (
    <StyledNormalCard>
      <p className="authorTag">author</p>
      <p className="authorName">{!author ? '' : author}</p>
      {/* <img alt="" src={!url ? '' : url} /> */}
      <img alt="" src={url} />
    </StyledNormalCard>
  );
});

export default NormalCard;
