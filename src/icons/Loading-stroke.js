import React from 'react';

const LoadingComponent = props => {
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
        d="M11.996 2.25v2.5m0 13.25v4m-6.25-10h-3.5m19 0h-1.5m-1.293 6.457l-.707-.707m.914-12.334L17.246 6.83M4.917 19.078l2.829-2.828M5.124 5.21L7.246 7.33"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

LoadingComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Loading = React.memo(LoadingComponent);

export default Loading;
