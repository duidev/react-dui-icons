import React from 'react';

const ChecktipsComponent = props => {
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
        d="M11.996 15.6h.009m.213-2.23v-.267c0-.6.527-1.066 1.025-1.4a1.856 1.856 0 00.785-1.908 1.862 1.862 0 00-.505-.95 1.841 1.841 0 00-2.01-.404 1.848 1.848 0 00-1.041 1.117"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

ChecktipsComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Checktips = React.memo(ChecktipsComponent);

export default Checktips;
