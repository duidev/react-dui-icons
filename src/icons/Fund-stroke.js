import React from 'react';

const FundComponent = props => {
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
        d="M7 14l2.941-3.41 3.53 3.41L17 10M2 7.5a4 4 0 014-4h12a4 4 0 014 4v9a4 4 0 01-4 4H6a4 4 0 01-4-4v-9z"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

FundComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Fund = React.memo(FundComponent);

export default Fund;
