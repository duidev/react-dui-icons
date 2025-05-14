import React from 'react';

const HomeLaunchPadComponent = props => {
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
        d="M3.987 9.107l5.808-5.924a2.414 2.414 0 012.237-.668l4.856 1.057a3.62 3.62 0 012.772 2.79l1.06 5.02a2.413 2.413 0 01-.642 2.192l-7.539 7.657m-4.965-9.143l-4.136 4.01m7.029.347l-6.083 6.43m11.699-10.3a3.697 3.697 0 01-5.272 0 3.804 3.804 0 010-5.334 3.697 3.697 0 015.272 0 3.804 3.804 0 010 5.335z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

HomeLaunchPadComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeLaunchPad = React.memo(HomeLaunchPadComponent);

export default HomeLaunchPad;
