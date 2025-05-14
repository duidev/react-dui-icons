import React from 'react';

const NewArrowUpComponent = props => {
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
        d="M18.991 9.988l-6.281-6.28a1 1 0 00-1.414 0L4.972 10.03m7.03-6.53V20"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

NewArrowUpComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NewArrowUp = React.memo(NewArrowUpComponent);

export default NewArrowUp;
