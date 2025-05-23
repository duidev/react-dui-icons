import React from 'react';

const TimeFillComponent = props => {
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
      <path
        d="M6.382 5.967A8.962 8.962 0 0112 4c2.125 0 4.078.737 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453A9 9 0 113 13c0-2.125.736-4.078 1.968-5.618L3.515 5.928l1.414-1.414 1.453 1.453zM13 12V7.494L8 14h3v4.5l5-6.5h-3zM8 1h8v2H8V1z"
        fill="#000"
      ></path>
    </svg>
  );
};

TimeFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const TimeFill = React.memo(TimeFillComponent);

export default TimeFill;
