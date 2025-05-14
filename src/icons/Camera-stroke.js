import React from 'react';

const CameraComponent = props => {
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
        d="M20.995 11.556v2.755c0 1.991 0 2.987-.392 3.748a3.578 3.578 0 01-1.573 1.553C18.26 20 17.25 20 15.235 20h-6.48c-2.016 0-3.024 0-3.794-.387a3.578 3.578 0 01-1.573-1.554c-.393-.76-.393-1.757-.393-3.748V9.69c0-1.991 0-2.987.393-3.748A3.578 3.578 0 014.96 4.388C5.731 4 6.739 4 8.755 4h3.69"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16 6h2.496m0 0H21m-2.504 0v2.5m0-2.5V3.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <circle
        cx="11.995"
        cy="12"
        r="3.5"
        strokeWidth="1.5"
        strokeLinejoin="round"
      ></circle>
    </svg>
  );
};

CameraComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Camera = React.memo(CameraComponent);

export default Camera;
