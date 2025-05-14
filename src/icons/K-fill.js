import React from 'react';

const KFillComponent = props => {
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
        d="M17.52 1.8h-1.8v2.6h-1.5a1.6 1.6 0 00-1.6 1.6v8.4a1.6 1.6 0 001.6 1.6h1.5v2.6h1.8V16h1.5a1.6 1.6 0 001.6-1.6V6a1.6 1.6 0 00-1.6-1.6h-1.5V1.8zM14.62 14V6.4h4V14h-4zm-10-6a1.6 1.6 0 00-1.6 1.6V18a1.6 1.6 0 001.6 1.6h1.5v2.6h1.8v-2.6h1.5a1.6 1.6 0 001.6-1.6V9.6A1.6 1.6 0 009.42 8h-1.5V5.4h-1.8V8h-1.5zm.4 9.6V10h4v7.6h-4z"
        fill="#222727"
      ></path>
    </svg>
  );
};

KFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const KFill = React.memo(KFillComponent);

export default KFill;
