import React from 'react';

const CheckCircleComponent = props => {
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
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeWidth="1.501"
        strokeLinecap="round"
      ></path>
      <path
        d="M15.792 9.894l-5.134 5.134-2.348-2.349"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

CheckCircleComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const CheckCircle = React.memo(CheckCircleComponent);

export default CheckCircle;
