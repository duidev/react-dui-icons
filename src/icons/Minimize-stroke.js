import React from 'react';

const MinimizeComponent = props => {
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
        d="M4.889 13.778h5.333m0 0v5.333m0-5.333L4 20m15.111-9.778h-5.333m0 0V4.89m0 5.333L20 4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

MinimizeComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Minimize = React.memo(MinimizeComponent);

export default Minimize;
