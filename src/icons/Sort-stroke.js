import React from 'react';

const SortComponent = props => {
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
        d="M7.996 9l3.293-3.293a1 1 0 011.414 0L15.996 9m0 6l-3.293 3.293a1 1 0 01-1.414 0L7.996 15"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

SortComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Sort = React.memo(SortComponent);

export default Sort;
