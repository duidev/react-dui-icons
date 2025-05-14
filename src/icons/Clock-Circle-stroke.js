import React from 'react';

const ClockCircleComponent = props => {
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
        d="M11 8.5v4.504L15.5 13m5.5-1a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

ClockCircleComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ClockCircle = React.memo(ClockCircleComponent);

export default ClockCircle;
