import React from 'react';

const ShieldTickComponent = props => {
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
      <g clipPath="url(#clip0_1588_95)">
        <path
          d="M15.852 10.024l-4.879 4.879L9 12.929M2 7.047c0-1.26 0-1.89.312-2.381.045-.071.094-.139.148-.204.37-.447.97-.642 2.169-1.03l6.254-2.026c.554-.18.83-.27 1.116-.278h.126c.285.01.561.1 1.114.282l6.145 2.016c1.194.391 1.79.587 2.159 1.034.053.064.102.132.147.203.31.49.31 1.118.31 2.373v5.455a10.26 10.26 0 01-7.617 9.914l-1.202.32a4.37 4.37 0 01-2.239.004l-1.318-.347A10.228 10.228 0 012 12.49V7.047z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1588_95">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ShieldTickComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ShieldTick = React.memo(ShieldTickComponent);

export default ShieldTick;
