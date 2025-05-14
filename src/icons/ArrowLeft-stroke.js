import React from 'react';

const ArrowLeftComponent = props => {
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
        d="M16 19.873l-7.25-7.25a1 1 0 010-1.414L16 3.958"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

ArrowLeftComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ArrowLeft = React.memo(ArrowLeftComponent);

export default ArrowLeft;
