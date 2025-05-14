import React from 'react';

const NavCardDarkComponent = props => {
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
        d="M12.25 16a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H13a.75.75 0 01-.75-.75z"
        fill="#00D5C8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5.5h12A2.5 2.5 0 0120.5 8v.25h-17V8A2.5 2.5 0 016 5.5zM3.5 9.75V17A2.5 2.5 0 006 19.5h12a2.5 2.5 0 002.5-2.5V9.75h-17zM2 8a4 4 0 014-4h12a4 4 0 014 4v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z"
        fill="#F9F9F9"
      ></path>
    </svg>
  );
};

NavCardDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavCardDark = React.memo(NavCardDarkComponent);

export default NavCardDark;
