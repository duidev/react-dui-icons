import React from 'react';

const CheckComponent = props => {
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
        d="M20 6L9.227 16.774c-.08.079-.119.118-.165.133a.2.2 0 01-.123 0c-.046-.015-.086-.054-.165-.133L4 12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

CheckComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Check = React.memo(CheckComponent);

export default Check;
