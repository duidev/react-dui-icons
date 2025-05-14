import React from 'react';

const NavDftDarkComponent = props => {
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
        d="M20 7.75a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zm1.5 0a4.75 4.75 0 11-9.5 0 4.75 4.75 0 019.5 0zm-10.5 9a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0zm1.5 0a4.75 4.75 0 11-9.5 0 4.75 4.75 0 019.5 0z"
        fill="#F9F9F9"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 9a4.252 4.252 0 013.26-4.134l-.238.952a.75.75 0 101.456.364l.496-1.984A.75.75 0 008 3.25 5.75 5.75 0 002.25 9a.75.75 0 101.5 0zm16.5 6a4.252 4.252 0 01-3.26 4.134l.238-.952a.75.75 0 00-1.456-.364l-.495 1.984a.749.749 0 00.723.948A5.75 5.75 0 0021.75 15a.75.75 0 00-1.5 0z"
        fill="#00D5C8"
      ></path>
    </svg>
  );
};

NavDftDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavDftDark = React.memo(NavDftDarkComponent);

export default NavDftDark;
