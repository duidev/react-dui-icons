import React from 'react';

const NavCoinMarginedDarkComponent = props => {
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
        d="M4.45 5.8A2.05 2.05 0 016.5 3.75a.75.75 0 100-1.5 3.551 3.551 0 00-3.454 2.728l-.066-.054a.75.75 0 10-.96 1.152L3.127 7a.806.806 0 001.323-.62V5.8zm15.1 12.4a2.05 2.05 0 01-2.05 2.05.75.75 0 000 1.5 3.552 3.552 0 003.454-2.728l.066.054a.75.75 0 10.96-1.152l-1.108-.923a.806.806 0 00-1.322.62v.58z"
        fill="#00D5C8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.28 4a6.72 6.72 0 015.575 10.474 8.22 8.22 0 00-9.33-9.33A6.69 6.69 0 0113.28 4zM6.328 6.33A8.22 8.22 0 1117.67 17.672 8.22 8.22 0 116.33 6.328zm11.113 6.95A6.72 6.72 0 114 13.28a6.72 6.72 0 0113.442 0z"
        fill="#F9F9F9"
      ></path>
    </svg>
  );
};

NavCoinMarginedDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavCoinMarginedDark = React.memo(NavCoinMarginedDarkComponent);

export default NavCoinMarginedDark;
