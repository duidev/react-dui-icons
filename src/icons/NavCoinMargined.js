import React from 'react';

const NavCoinMarginedComponent = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="dui-icon"
      fill="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 3.75A2.05 2.05 0 004.45 5.8v.58A.806.806 0 013.127 7L2.02 6.075a.75.75 0 11.96-1.152l.066.054A3.551 3.551 0 016.5 2.25a.75.75 0 010 1.5z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 20.25a2.05 2.05 0 002.05-2.05v-.58a.806.806 0 011.322-.62l1.108.924a.75.75 0 11-.96 1.152l-.066-.054A3.552 3.552 0 0117.5 21.75a.75.75 0 010-1.5z"
        fill="#00DDD3"
      ></path>
      <path d="M20 10.72A6.72 6.72 0 007.598 7.13L5.713 7.5A8.223 8.223 0 0121.5 10.72a8.224 8.224 0 01-5.556 7.78L17 16.32a6.715 6.715 0 003-5.598z"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.28 2.5a8.22 8.22 0 012.664 16L17 16.32a6.751 6.751 0 002.3-2.608 6.692 6.692 0 00.7-2.976v-.014A6.72 6.72 0 007.598 7.129L5.713 7.5c.264-.618.6-1.197 1-1.726A8.208 8.208 0 0113.279 2.5z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.72 20a6.72 6.72 0 100-13.441 6.72 6.72 0 000 13.441zm0 1.5a8.22 8.22 0 100-16.441 8.22 8.22 0 000 16.441z"
      ></path>
    </svg>
  );
};

NavCoinMarginedComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavCoinMargined = React.memo(NavCoinMarginedComponent);

export default NavCoinMargined;
