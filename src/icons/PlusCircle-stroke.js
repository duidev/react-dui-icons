import React from 'react';

const PlusCircleComponent = props => {
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
        d="M8.253 12.004h3.751m0 0h3.752m-3.752 0V8.253m0 3.751v3.752M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeWidth="1.501"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

PlusCircleComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const PlusCircle = React.memo(PlusCircleComponent);

export default PlusCircle;
