import React from 'react';

const MenuComponent = props => {
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
        d="M3.996 12h16m-16-6h16m-16 12h16"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

MenuComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Menu = React.memo(MenuComponent);

export default Menu;
