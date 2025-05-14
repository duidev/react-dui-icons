import React from 'react';

const SlidersComponent = props => {
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
        d="M13.009 17h8m-18-10h8"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M6.009 13.75a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5zm12-10a3.25 3.25 0 110 6.5 3.25 3.25 0 010-6.5z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

SlidersComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Sliders = React.memo(SlidersComponent);

export default Sliders;
