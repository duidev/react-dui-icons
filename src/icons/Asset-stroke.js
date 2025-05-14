import React from 'react';

const AssetComponent = props => {
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
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="4"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></rect>
      <path
        d="M20.5 14.346h-4.904a2.25 2.25 0 110-4.498H20.5"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

AssetComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Asset = React.memo(AssetComponent);

export default Asset;
