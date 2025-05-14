import React from 'react';

const ReturnLeftComponent = props => {
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
        d="M3.851 12.042h16.396m-10.06 6.713l-6.14-6.053a.983.983 0 010-1.404l6.14-6.053"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

ReturnLeftComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ReturnLeft = React.memo(ReturnLeftComponent);

export default ReturnLeft;
