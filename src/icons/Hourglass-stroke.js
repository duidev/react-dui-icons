import React from 'react';

const HourglassComponent = props => {
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
        d="M5 3.6h14M5 20.3h14"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M17.25 3.75v2.98a5.25 5.25 0 11-10.5 0V3.75h10.5z"
        strokeWidth="1.5"
      ></path>
      <path
        d="M17.25 20.25v-2.98a5.25 5.25 0 10-10.5 0v2.98h10.5z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

HourglassComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Hourglass = React.memo(HourglassComponent);

export default Hourglass;
