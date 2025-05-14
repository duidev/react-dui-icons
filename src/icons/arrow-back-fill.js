import React from 'react';

const ArrowBackFillComponent = props => {
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
        d="M13.243 6.343L7.586 12l5.657 5.657 1.414-1.414L10.414 12l4.243-4.243-1.414-1.414z"
        fill="#fff"
      ></path>
    </svg>
  );
};

ArrowBackFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ArrowBackFill = React.memo(ArrowBackFillComponent);

export default ArrowBackFill;
