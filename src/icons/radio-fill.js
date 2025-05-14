import React from 'react';

const RadioFillComponent = props => {
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
        d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12zM12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12s12-5.372 12-12c0-6.627-5.373-12-12-12z"
        fill="#00DDD3"
      ></path>
      <rect x="6" y="6" width="12" height="12" rx="6" fill="#00DDD3"></rect>
    </svg>
  );
};

RadioFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const RadioFill = React.memo(RadioFillComponent);

export default RadioFill;
