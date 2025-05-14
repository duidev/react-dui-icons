import React from 'react';

const MinusCircleComponent = props => {
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
        d="M8.628 12.004h6.752M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

MinusCircleComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const MinusCircle = React.memo(MinusCircleComponent);

export default MinusCircle;
