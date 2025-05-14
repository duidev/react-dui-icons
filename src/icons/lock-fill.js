import React from 'react';

const LockFillComponent = props => {
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
      <g clipPath="url(#clip0_1394_60)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.833.433a6.9 6.9 0 00-6.9 6.9v1.794A4.502 4.502 0 001.5 13.5v5.25a4.5 4.5 0 004.5 4.5h12a4.5 4.5 0 004.5-4.5V13.5c0-2.235-1.63-4.09-3.767-4.44V7.333a6.9 6.9 0 00-6.9-6.9zM16.6 9V7.333a4.767 4.767 0 10-9.533 0V9H16.6zM12 13.475c.59 0 1.067.477 1.067 1.066v2.334a1.067 1.067 0 01-2.134 0V14.54c0-.589.478-1.066 1.067-1.066z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1394_60">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

LockFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const LockFill = React.memo(LockFillComponent);

export default LockFill;
