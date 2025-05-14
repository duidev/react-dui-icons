import React from 'react';

const ScanComponent = props => {
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
        d="M3 7v-.436c0-1.587 0-2.38.45-2.906.063-.075.133-.145.208-.208C4.184 3 4.978 3 6.564 3H7"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M21 17v.436c0 1.587 0 2.38-.45 2.907a1.876 1.876 0 01-.207.208c-.527.45-1.32.45-2.907.45H17"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M7.091 21h-.527c-1.587 0-2.38 0-2.906-.45a1.875 1.875 0 01-.208-.207C3 19.816 3 19.023 3 17.436v-.527"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M17 3h1.149c1.27 0 1.904 0 2.325.36.06.05.115.106.166.166.36.421.36 1.056.36 2.325v1.15"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path d="M8 12h8" strokeWidth="1.5" strokeLinecap="round"></path>
    </svg>
  );
};

ScanComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Scan = React.memo(ScanComponent);

export default Scan;
