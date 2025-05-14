import React from 'react';

const ArrowDownFillComponent = props => {
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
      <circle cx="12" cy="12" r="12"></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.4 11.25l-5.657 5.657-5.657-5.657L7.5 9.836l4.243 4.242 4.242-4.242L17.4 11.25z"
        fill="#fff"
      ></path>
    </svg>
  );
};

ArrowDownFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ArrowDownFill = React.memo(ArrowDownFillComponent);

export default ArrowDownFill;
