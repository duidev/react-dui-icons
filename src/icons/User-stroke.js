import React from 'react';

const UserComponent = props => {
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
        d="M11.996 22c5.522 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        strokeWidth="1.5"
      ></path>
      <path
        d="M18.128 19.77c0-2.183-2.792-3.952-6.235-3.952-3.444 0-6.235 1.77-6.235 3.952"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M11.996 6.75a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

UserComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const User = React.memo(UserComponent);

export default User;
