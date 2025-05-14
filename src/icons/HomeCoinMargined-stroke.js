import React from 'react';

const HomeCoinMarginedComponent = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="dui-icon"
      fill="none"
      stroke="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        d="M2.491 5.5l1.108.923c.037.03.092.005.092-.043V5.8a2.8 2.8 0 012.8-2.8m16 15.5l-1.107-.923a.056.056 0 00-.093.043v.58a2.8 2.8 0 01-2.8 2.8M9.84 5.262A7 7 0 1119.5 15.355m.291-2.296a8 8 0 11-16 0 8 8 0 0116 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

HomeCoinMarginedComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeCoinMargined = React.memo(HomeCoinMarginedComponent);

export default HomeCoinMargined;
