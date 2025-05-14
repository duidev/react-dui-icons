import React from 'react';

const NameDeleteComponent = props => {
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
        d="M2.996 6.625h18m-11.5 5.477v3m5-3v3M5 6.625h14v11.5a3 3 0 01-3 3H8a3 3 0 01-3-3v-11.5zm12 0v-2.25a1.5 1.5 0 00-1.5-1.5h-7a1.5 1.5 0 00-1.5 1.5v2.25h10z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

NameDeleteComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NameDelete = React.memo(NameDeleteComponent);

export default NameDelete;
