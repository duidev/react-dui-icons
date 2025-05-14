import React from 'react';

const GobackComponent = props => {
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
        d="M14.996 3h-8a4 4 0 00-4 4v10a4 4 0 004 4h8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16.996 8l4 4m0 0l-4 4m4-4H9.984"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

GobackComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Goback = React.memo(GobackComponent);

export default Goback;
