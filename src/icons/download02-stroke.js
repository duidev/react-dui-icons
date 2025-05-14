import React from 'react';

const Download02Component = props => {
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
        d="M15.6 6H18c1.657 0 3 1.36 3 3.037v9.925C21 20.64 19.657 22 18 22H6c-1.657 0-3-1.36-3-3.038V9.037C3 7.36 4.343 6 6 6h2.4m.129 7.147l2.895 2.413a1 1 0 001.28 0l2.896-2.413m-3.6 1.5V2"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

Download02Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Download02 = React.memo(Download02Component);

export default Download02;
