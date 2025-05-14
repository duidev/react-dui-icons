import React from 'react';

const CustomerServiceFillComponent = props => {
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
        d="M21 8a2 2 0 012 2v3.999a2 2 0 01-2 2h-1.062a8 8 0 01-7.938 7v-2a6 6 0 006-6v-6A6 6 0 106 9v7H3a2 2 0 01-2-2v-4a2 2 0 012-2h1.062a8.001 8.001 0 0115.876 0H21z"
        fill="#000"
      ></path>
      <path
        d="M8.82 14.088l-1.06 1.696A7.964 7.964 0 0012 16.999c1.5.002 2.97-.419 4.24-1.215l-1.06-1.696a5.973 5.973 0 01-3.18.911 5.973 5.973 0 01-3.18-.911z"
        fill="#000"
      ></path>
    </svg>
  );
};

CustomerServiceFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const CustomerServiceFill = React.memo(CustomerServiceFillComponent);

export default CustomerServiceFill;
