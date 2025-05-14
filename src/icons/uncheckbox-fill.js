import React from 'react';

const UncheckboxFillComponent = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="dui-icon"
      fill="currentcolor"
      color={color}
      {...otherProps}
    >
      <rect
        x=".75"
        y=".75"
        width="22.5"
        height="22.5"
        rx="2.25"
        fill="#fff"
      ></rect>
      <rect
        x=".75"
        y=".75"
        width="22.5"
        height="22.5"
        rx="2.25"
        strokeWidth="1.5"
      ></rect>
    </svg>
  );
};

UncheckboxFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const UncheckboxFill = React.memo(UncheckboxFillComponent);

export default UncheckboxFill;
