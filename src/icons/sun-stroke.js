import React from 'react';

const SunComponent = props => {
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
        d="M11.975 1.2v1.1m0 19.225v1.1m10.712-10.712h-1.1m-19.225 0h-1.1m18.288 7.575l-.778-.778M5.178 5.116L4.4 4.338m0 15.15l.778-.778M18.772 5.116l.778-.778M18.5 12a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

SunComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Sun = React.memo(SunComponent);

export default Sun;
