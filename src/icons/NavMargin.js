import React from 'react';

const NavMarginComponent = props => {
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
        d="M18 12.3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 1.5a3 3 0 100-6 3 3 0 000 6z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 11.3a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 1.5a5 5 0 100-10 5 5 0 000 10zm-5.745.617a.75.75 0 01.828-.662l18 2a.75.75 0 11-.166 1.49l-18-2a.75.75 0 01-.662-.828zm9.548 3.859a.25.25 0 01.394 0l1.707 2.193.01.017a.027.027 0 01.002.008c0 .006 0 .016-.007.028a.058.058 0 01-.018.023.027.027 0 01-.007.003.067.067 0 01-.02.002h-3.728a.068.068 0 01-.02-.002.039.039 0 01-.007-.003.057.057 0 01-.018-.023.057.057 0 01-.007-.028l.002-.008a.067.067 0 01.01-.017l1.707-2.194zm1.578-.921c-.7-.901-2.062-.901-2.762 0l-1.707 2.194c-.792 1.018-.066 2.501 1.224 2.501h3.728c1.29 0 2.016-1.483 1.224-2.502l-1.707-2.193z"
      ></path>
    </svg>
  );
};

NavMarginComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavMargin = React.memo(NavMarginComponent);

export default NavMargin;
