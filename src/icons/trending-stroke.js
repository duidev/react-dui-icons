import React from 'react';

const TrendingComponent = props => {
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
        d="M16.05 12.675v2.1M12 9.3v5.475m-4.05-2.55v2.55M3 7.5a3.6 3.6 0 013.6-3.6h10.8A3.6 3.6 0 0121 7.5v9a3.6 3.6 0 01-3.6 3.6H6.6A3.6 3.6 0 013 16.5v-9z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

TrendingComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Trending = React.memo(TrendingComponent);

export default Trending;
