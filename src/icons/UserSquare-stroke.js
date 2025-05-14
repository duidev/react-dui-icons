import React from 'react';

const UserSquareComponent = props => {
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
        d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25 0 5.661-4.59 10.25-10.25 10.25S1.75 17.661 1.75 12C1.75 6.34 6.34 1.75 12 1.75z"
        strokeWidth="1.5"
      ></path>
      <path
        d="M18.132 19.77c0-2.183-2.792-3.952-6.235-3.952-3.443 0-6.235 1.77-6.235 3.952"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M12 6.75a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

UserSquareComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const UserSquare = React.memo(UserSquareComponent);

export default UserSquare;
