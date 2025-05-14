import React from 'react';

const CubeComponent = props => {
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
        d="M4.206 7.67L12 12.433l8-5.29m-8 5.612v8.338M10.268 2.608a3.464 3.464 0 013.464 0l5.536 3.196a3.464 3.464 0 011.732 3v6.392c0 1.238-.66 2.381-1.732 3l-5.536 3.196a3.464 3.464 0 01-3.464 0l-5.536-3.196a3.464 3.464 0 01-1.732-3V8.804c0-1.238.66-2.381 1.732-3l5.536-3.196z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

CubeComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Cube = React.memo(CubeComponent);

export default Cube;
