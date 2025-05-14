import React from 'react';

const ArrowUpFillComponent = props => {
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
        d="M17.657 13.758L12 8.1l-5.657 5.656 1.414 1.415L12 10.929l4.243 4.243 1.414-1.415z"
        fill="#fff"
      ></path>
    </svg>
  );
};

ArrowUpFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ArrowUpFill = React.memo(ArrowUpFillComponent);

export default ArrowUpFill;
