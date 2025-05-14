import React from 'react';

const List2Component = props => {
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
        d="M3.996 6h16m-16 6h8m-8 6h16"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

List2Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const List2 = React.memo(List2Component);

export default List2;
