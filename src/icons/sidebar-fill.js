import React from 'react';

const SidebarFillComponent = props => {
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
      <g clipPath="url(#clip0_68_57)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.6 0h16.8A3.6 3.6 0 0124 3.6v16.8a3.6 3.6 0 01-3.6 3.6H3.6A3.6 3.6 0 010 20.4V3.6A3.6 3.6 0 013.6 0zm1.2 2.4a1.2 1.2 0 00-1.2 1.2v16.8a1.2 1.2 0 001.2 1.2h3.6a1.2 1.2 0 001.2-1.2V3.6a1.2 1.2 0 00-1.2-1.2H4.8z"
          fill="#9DA0A0"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_68_57">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

SidebarFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const SidebarFill = React.memo(SidebarFillComponent);

export default SidebarFill;
