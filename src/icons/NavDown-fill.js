import React from 'react';

const NavDownFillComponent = props => {
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
      <path d="M17.92 8.18H6.08c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68.19-1.84-.77-1.84z"></path>
    </svg>
  );
};

NavDownFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavDownFill = React.memo(NavDownFillComponent);

export default NavDownFill;
