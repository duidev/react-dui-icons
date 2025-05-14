import React from 'react';

const NavWealthDarkComponent = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 5H6a2.5 2.5 0 00-2.5 2.5v9A2.5 2.5 0 006 19h12a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0018 5zM6 3.5a4 4 0 00-4 4v9a4 4 0 004 4h12a4 4 0 004-4v-9a4 4 0 00-4-4H6z"
        fill="#F9F9F9"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 12a.75.75 0 01.75.75v2.334a.75.75 0 01-1.5 0V12.75a.75.75 0 01.75-.75z"
        fill="#00D5C8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8.25a.75.75 0 01.75.75v6.084a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75z"
        fill="#00D5C8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 11.5a.75.75 0 01.75.75v2.834a.75.75 0 01-1.5 0V12.25a.75.75 0 01.75-.75z"
        fill="#00D5C8"
      ></path>
    </svg>
  );
};

NavWealthDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavWealthDark = React.memo(NavWealthDarkComponent);

export default NavWealthDark;
