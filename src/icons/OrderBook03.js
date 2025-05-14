import React from 'react';

const OrderBook03Component = props => {
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
      <rect x="2.5" y="4" width="7" height="16" fill="#00DDD3"></rect>
      <rect
        x="11.5"
        y="4"
        width="10"
        height="4"
        fill="#222727"
        fillOpacity=".35"
      ></rect>
      <rect
        x="11.5"
        y="10"
        width="10"
        height="4"
        fill="#222727"
        fillOpacity=".35"
      ></rect>
      <rect
        x="11.5"
        y="16"
        width="10"
        height="4"
        fill="#222727"
        fillOpacity=".35"
      ></rect>
    </svg>
  );
};

OrderBook03Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const OrderBook03 = React.memo(OrderBook03Component);

export default OrderBook03;
