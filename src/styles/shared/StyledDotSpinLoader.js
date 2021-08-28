/* eslint-disable prettier/prettier */
import styled from '@emotion/styled/macro';
import STYLES_CONSTANT from '../app/STYLES_CONSTANT';

const StyledDotSpinLoader = styled.div`
  .dot-spin {
    position: relative;
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-color: transparent;
    color: transparent;
    box-shadow: 0 -18px 0 0 ${STYLES_CONSTANT.color.beige400}, 12.72984px -12.72984px 0 0 ${STYLES_CONSTANT.color.beige400}, 18px 0 0 0 ${STYLES_CONSTANT.color.beige400}, 12.72984px 12.72984px 0 0 ${STYLES_CONSTANT.color.beigeTrans400}, 0 18px 0 0 ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px 12.72984px 0 0 ${STYLES_CONSTANT.color.beigeTrans400}, -18px 0 0 0 ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px -12.72984px 0 0 ${STYLES_CONSTANT.color.beigeTrans400};
    animation: dotSpin 1.5s infinite linear;
  }

  @keyframes dotSpin {
    0%,
    100% {
      box-shadow: 0 -18px 0 0 ${STYLES_CONSTANT.color.beige400}, 12.72984px -12.72984px 0 0 ${STYLES_CONSTANT.color.beige400}, 18px 0 0 0 ${STYLES_CONSTANT.color.beige400}, 12.72984px 12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 0 18px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px 12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -18px 0 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px -12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400};
    }
    12.5% {
      box-shadow: 0 -18px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 12.72984px -12.72984px 0 0 ${STYLES_CONSTANT.color.beige400}, 18px 0 0 0 ${STYLES_CONSTANT.color.beige400}, 12.72984px 12.72984px 0 0 ${STYLES_CONSTANT.color.beige400}, 0 18px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px 12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -18px 0 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px -12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400};
    }
    25% {
      box-shadow: 0 -18px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 12.72984px -12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 18px 0 0 0 ${STYLES_CONSTANT.color.beige400}, 12.72984px 12.72984px 0 0 ${STYLES_CONSTANT.color.beige400}, 0 18px 0 0 ${STYLES_CONSTANT.color.beige400}, -12.72984px 12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -18px 0 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px -12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400};
    }
    37.5% {
      box-shadow: 0 -18px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 12.72984px -12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 18px 0 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 12.72984px 12.72984px 0 0 ${STYLES_CONSTANT.color.beige400}, 0 18px 0 0 ${STYLES_CONSTANT.color.beige400}, -12.72984px 12.72984px 0 0 ${STYLES_CONSTANT.color.beige400}, -18px 0 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px -12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400};
    }
    50% {
      box-shadow: 0 -18px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 12.72984px -12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 18px 0 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 12.72984px 12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 0 18px 0 0 ${STYLES_CONSTANT.color.beige400}, -12.72984px 12.72984px 0 0 ${STYLES_CONSTANT.color.beige400}, -18px 0 0 0 ${STYLES_CONSTANT.color.beige400}, -12.72984px -12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400};
    }
    62.5% {
      box-shadow: 0 -18px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 12.72984px -12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 18px 0 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 12.72984px 12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 0 18px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px 12.72984px 0 0 ${STYLES_CONSTANT.color.beige400}, -18px 0 0 0 ${STYLES_CONSTANT.color.beige400}, -12.72984px -12.72984px 0 0 ${STYLES_CONSTANT.color.beige400};
    }
    75% {
      box-shadow: 0 -18px 0 0 ${STYLES_CONSTANT.color.beige400}, 12.72984px -12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 18px 0 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 12.72984px 12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 0 18px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px 12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -18px 0 0 0 ${STYLES_CONSTANT.color.beige400}, -12.72984px -12.72984px 0 0 ${STYLES_CONSTANT.color.beige400};
    }
    87.5% {
      box-shadow: 0 -18px 0 0 ${STYLES_CONSTANT.color.beige400}, 12.72984px -12.72984px 0 0 ${STYLES_CONSTANT.color.beige400}, 18px 0 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 12.72984px 12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, 0 18px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px 12.72984px 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -18px 0 0 -5px ${STYLES_CONSTANT.color.beigeTrans400}, -12.72984px -12.72984px 0 0 ${STYLES_CONSTANT.color.beige400};
    }
  }
`;

export default StyledDotSpinLoader;
