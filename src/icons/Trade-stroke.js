import React from 'react';

const TradeComponent = props => {
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
        d="M15.682 4.62H18a3 3 0 013 3v8.58a3 3 0 01-3 3h-6.867a.2.2 0 00-.142.341L12 20.55M11.1 3l1.218 1.282a.2.2 0 01-.145.338H6a3 3 0 00-3 3v8.58a3 3 0 003 3h1.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path d="M3 9.813h18" strokeWidth="1.5"></path>
    </svg>
  );
};

TradeComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Trade = React.memo(TradeComponent);

export default Trade;
