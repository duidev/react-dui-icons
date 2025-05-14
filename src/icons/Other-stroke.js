import React from 'react';

const OtherComponent = props => {
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
        x="3.75"
        y="3.75"
        width="6.5"
        height="6.5"
        rx="1.25"
        strokeWidth="1.5"
      ></rect>
      <rect
        x="3.75"
        y="13.75"
        width="6.5"
        height="6.5"
        rx="1.25"
        strokeWidth="1.5"
      ></rect>
      <rect
        x="13.75"
        y="13.75"
        width="6.5"
        height="6.5"
        rx="1.25"
        strokeWidth="1.5"
      ></rect>
      <rect
        x="13.75"
        y="3.75"
        width="6.5"
        height="6.5"
        rx="3.25"
        strokeWidth="1.5"
      ></rect>
    </svg>
  );
};

OtherComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Other = React.memo(OtherComponent);

export default Other;
