import React from 'react';

const NavPopularComponent = props => {
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
        d="M12 2.25a9.25 9.25 0 100 18.5 9.25 9.25 0 000-18.5zM1.25 11.5C1.25 5.563 6.063.75 12 .75S22.75 5.563 22.75 11.5 17.937 22.25 12 22.25 1.25 17.437 1.25 11.5z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.25a.75.75 0 01.75.75v.3a2.5 2.5 0 011.285 4.2 2.5 2.5 0 01-1.285 4.2v.3a.75.75 0 01-1.5 0v-.25h-1.06a.94.94 0 01-.94-.94V8.19c0-.519.421-.94.94-.94h1.06V7a.75.75 0 01.75-.75zm0 8h.25a1 1 0 100-2h-1.5v2H12zm-1.25-5.5h1.5a1 1 0 110 2h-1.5v-2z"
        fill="#00DDD3"
      ></path>
    </svg>
  );
};

NavPopularComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavPopular = React.memo(NavPopularComponent);

export default NavPopular;
