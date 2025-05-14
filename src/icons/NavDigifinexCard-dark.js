import React from 'react';

const NavDigifinexCardDarkComponent = props => {
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
        d="M14.7 12.7v3.156h1.022a1.578 1.578 0 100-3.156H14.7zm-.7-1.2a.5.5 0 00-.5.5v4.556a.5.5 0 00.5.5h1.722a2.778 2.778 0 000-5.556H14z"
        fill="#00D5C8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.888 7.75H21.12v1.5H2.888v-1.5z"
        fill="#F9F9F9"
      ></path>
    </svg>
  );
};

NavDigifinexCardDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavDigifinexCardDark = React.memo(NavDigifinexCardDarkComponent);

export default NavDigifinexCardDark;
