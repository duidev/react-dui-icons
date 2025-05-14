import React from 'react';

const PriceQuotesComponent = props => {
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
        d="M8 10.556h4m-4 4.5h8m-9.5 6.388h11a3 3 0 003-3V5.556a3 3 0 00-3-3h-11a3 3 0 00-3 3v12.888a3 3 0 003 3zM9 2.556h6v2.5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2.5z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

PriceQuotesComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const PriceQuotes = React.memo(PriceQuotesComponent);

export default PriceQuotes;
