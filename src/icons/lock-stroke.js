import React from 'react';

const LockComponent = props => {
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
        d="M17.555 9.778V7.556a5.556 5.556 0 00-11.11 0v2.222m5.555 5V17m-3.556 5h7.111c1.867 0 2.8 0 3.514-.363a3.334 3.334 0 001.456-1.457c.364-.713.364-1.646.364-3.513V15.11c0-1.867 0-2.8-.364-3.513a3.334 3.334 0 00-1.456-1.457c-.713-.363-1.647-.363-3.514-.363h-7.11c-1.868 0-2.801 0-3.514.363-.627.32-1.137.83-1.457 1.457-.363.713-.363 1.646-.363 3.513v1.556c0 1.866 0 2.8.363 3.513.32.627.83 1.137 1.457 1.457C5.644 22 6.577 22 8.444 22z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

LockComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Lock = React.memo(LockComponent);

export default Lock;
