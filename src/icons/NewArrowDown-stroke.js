import React from 'react';

const NewArrowDownComponent = props => {
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
        d="M19.01 14.012l-6.281 6.28a1 1 0 01-1.414 0L4.99 13.97m7.032 6.531V4"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

NewArrowDownComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NewArrowDown = React.memo(NewArrowDownComponent);

export default NewArrowDown;
