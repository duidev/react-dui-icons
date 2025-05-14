import React from 'react';

const BellComponent = props => {
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
        d="M10.005 21.75h4m-2-18v-1.5m-7.85 8.167v4.812c0 .556-.112 1.106-.332 1.617a1.365 1.365 0 001.254 1.904h13.855a1.356 1.356 0 001.242-1.9 4.066 4.066 0 01-.34-1.63v-4.803c0-1.768-.866-3.464-2.405-4.714-1.54-1.25-3.257-1.953-5.434-1.953-2.178 0-3.895.702-5.435 1.953-1.54 1.25-2.404 2.946-2.404 4.714z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

BellComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Bell = React.memo(BellComponent);

export default Bell;
