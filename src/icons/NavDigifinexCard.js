import React from 'react';

const NavDigifinexCardComponent = props => {
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
        d="M14.7 12.7v3.156h1.022a1.578 1.578 0 100-3.156H14.7zm-.7-1.2a.5.5 0 00-.5.5v4.556a.5.5 0 00.5.5h1.722a2.778 2.778 0 000-5.556H14z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 5h12a2.5 2.5 0 012.5 2.5v.25h-17V7.5A2.5 2.5 0 016 5zM3.5 9.25v7.25A2.5 2.5 0 006 19h12a2.5 2.5 0 002.5-2.5V9.25h-17zM2 7.5a4 4 0 014-4h12a4 4 0 014 4v9a4 4 0 01-4 4H6a4 4 0 01-4-4v-9z"
      ></path>
    </svg>
  );
};

NavDigifinexCardComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavDigifinexCard = React.memo(NavDigifinexCardComponent);

export default NavDigifinexCard;
