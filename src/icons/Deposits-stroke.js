import React from 'react';

const DepositsComponent = props => {
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
      <path d="M2 8.313h19.892" strokeWidth="1.5"></path>
      <path
        d="M14.924 21H6.54a4 4 0 01-4-4V7a4 4 0 014-4H18a4 4 0 014 4v6.688"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M16 18l2 2 4-4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

DepositsComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Deposits = React.memo(DepositsComponent);

export default Deposits;
