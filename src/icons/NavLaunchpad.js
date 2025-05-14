import React from 'react';

const NavLaunchpadComponent = props => {
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
        d="M8.558 11.9a.76.76 0 01-.063 1.065l-4.059 3.64a.74.74 0 01-1.052-.063.76.76 0 01.063-1.065l4.058-3.641a.74.74 0 011.053.064z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.036 15.753a.76.76 0 01-.034 1.067L6.01 21.55a.74.74 0 01-1.054-.034.76.76 0 01.034-1.067l4.992-4.73a.74.74 0 011.054.034z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.293 12.64a.995.995 0 00.271-.893l-1.06-5.532a1.55 1.55 0 00-1.23-1.227l-5.517-1.05a.995.995 0 00-.891.27L5.559 9.484a.764.764 0 01-1.076-1.084l5.303-5.27a2.488 2.488 0 012.228-.678l5.518 1.05a3.1 3.1 0 012.457 2.455l1.061 5.531a2.487 2.487 0 01-.677 2.232l-7.069 7.069a.763.763 0 11-1.08-1.08l7.07-7.069zm-7.412-1.101a1.972 1.972 0 002.812 0 2.029 2.029 0 000-2.845 1.972 1.972 0 00-2.812 0 2.029 2.029 0 000 2.845zm-1.054 1.067a3.45 3.45 0 004.92 0 3.55 3.55 0 000-4.98 3.45 3.45 0 00-4.92 0 3.55 3.55 0 000 4.98z"
      ></path>
    </svg>
  );
};

NavLaunchpadComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavLaunchpad = React.memo(NavLaunchpadComponent);

export default NavLaunchpad;
