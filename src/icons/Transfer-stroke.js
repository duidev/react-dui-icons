import React from 'react';

const TransferComponent = props => {
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
        d="M3 8.125h18L17.625 4.75M21 15.875H3l3.375 3.375"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

TransferComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Transfer = React.memo(TransferComponent);

export default Transfer;
