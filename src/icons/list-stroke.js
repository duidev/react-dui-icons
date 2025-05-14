import React from 'react';

const ListComponent = props => {
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
        d="M6.6 12H21M6.6 6H21M6.6 18H21M3.514 12H3m.514-6H3m.514 12H3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

ListComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const List = React.memo(ListComponent);

export default List;
