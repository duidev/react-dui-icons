import React from 'react';

const NavMarginDarkComponent = props => {
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
        d="M8 11.3a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 1.5a5 5 0 100-10 5 5 0 000 10z"
        fill="#F9F9F9"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 12.3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 1.5a3 3 0 100-6 3 3 0 000 6z"
        fill="#00D5C8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.255 13.417a.75.75 0 01.828-.662l18 2a.75.75 0 01-.166 1.49l-18-2a.75.75 0 01-.662-.828z"
        fill="#F9F9F9"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.197 17.276a.25.25 0 00-.394 0l-1.707 2.193a.067.067 0 00-.01.017.028.028 0 00-.002.008c0 .006 0 .016.007.028.006.012.013.02.018.023a.03.03 0 00.007.003c.003 0 .009.002.02.002h3.728c.011 0 .017-.001.02-.002a.027.027 0 00.007-.003.058.058 0 00.018-.023.056.056 0 00.007-.028l-.002-.008a.068.068 0 00-.01-.017l-1.707-2.194zm-1.578-.921c.7-.901 2.062-.901 2.762 0l1.707 2.194c.792 1.018.066 2.501-1.224 2.501h-3.728c-1.29 0-2.016-1.483-1.224-2.502l1.707-2.193z"
        fill="#F9F9F9"
      ></path>
    </svg>
  );
};

NavMarginDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavMarginDark = React.memo(NavMarginDarkComponent);

export default NavMarginDark;
