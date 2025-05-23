import React from 'react';

const HomeServiceFillComponent = props => {
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
      <g clipPath="url(#clip0_538_35)" fillRule="evenodd" clipRule="evenodd">
        <path
          d="M1 13C1 6.925 5.925 2 12 2s11 4.925 11 11v4a1 1 0 11-2 0v-4a9 9 0 10-18 0v4a1 1 0 11-2 0v-4z"
          fill="#78808D"
        ></path>
        <path
          d="M4 15.5a3.5 3.5 0 117 0v3a3.5 3.5 0 11-7 0v-3zM7.5 14A1.5 1.5 0 006 15.5v3a1.5 1.5 0 003 0v-3A1.5 1.5 0 007.5 14zm5.5 1.5a3.5 3.5 0 117 0v3a3.5 3.5 0 11-7 0v-3zm3.5-1.5a1.5 1.5 0 00-1.5 1.5v3a1.5 1.5 0 003 0v-3a1.5 1.5 0 00-1.5-1.5z"
          fill="#00D5C8"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_538_35">
          <rect
            width="22"
            height="20"
            fill="#fff"
            transform="translate(1 2)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

HomeServiceFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeServiceFill = React.memo(HomeServiceFillComponent);

export default HomeServiceFill;
