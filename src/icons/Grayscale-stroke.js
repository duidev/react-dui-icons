import React from 'react';

const GrayscaleComponent = props => {
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
        d="M9.188 2.5c-4.145 1.09-7.201 4.86-7.201 9.341 0 5.335 4.33 9.66 9.673 9.66a9.676 9.676 0 009.169-6.573"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M21.387 12a.573.573 0 00.582-.6 9.998 9.998 0 00-9.383-9.382c-.33-.02-.6.25-.6.582v8.2a1.2 1.2 0 001.2 1.2h8.2z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

GrayscaleComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Grayscale = React.memo(GrayscaleComponent);

export default Grayscale;
