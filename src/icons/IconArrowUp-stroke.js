import React from 'react';

const IconArrowUpComponent = props => {
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
        d="M4.126 16l7.251-7.25a1 1 0 011.414 0L20.043 16"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

IconArrowUpComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const IconArrowUp = React.memo(IconArrowUpComponent);

export default IconArrowUp;
