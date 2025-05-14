import React from 'react';

const HomeotcComponent = props => {
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
        d="M11.996 22c-5.523 0-10-4.477-10-10s4.477-10 10-10c5.522 0 10 4.477 10 10"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M11.987 15a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M14.377 19.376h5.4l-1.434 1.434"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M21.787 16.434h-5.4L17.822 15"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

HomeotcComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Homeotc = React.memo(HomeotcComponent);

export default Homeotc;
