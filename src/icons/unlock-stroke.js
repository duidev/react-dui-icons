import React from 'react';

const UnlockComponent = props => {
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
        d="M6.445 9.778V7.556a5.556 5.556 0 0110.648-2.223M12 14.778V17m-3.555 5h7.11c1.868 0 2.801 0 3.514-.363a3.334 3.334 0 001.457-1.457c.363-.713.363-1.646.363-3.513V15.11c0-1.867 0-2.8-.363-3.513a3.334 3.334 0 00-1.457-1.457c-.713-.363-1.646-.363-3.513-.363H8.445c-1.867 0-2.8 0-3.514.363-.627.32-1.137.83-1.456 1.457-.364.713-.364 1.646-.364 3.513v1.556c0 1.866 0 2.8.364 3.513.32.627.83 1.137 1.456 1.457C5.644 22 6.578 22 8.445 22z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

UnlockComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Unlock = React.memo(UnlockComponent);

export default Unlock;
