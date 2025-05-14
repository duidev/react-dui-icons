import React from 'react';

const FilterComponent = props => {
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
        d="M11.496 19.5v-6.07a1 1 0 00-.313-.726L4.729 6.59C3.744 5.656 4.404 4 5.76 4h13.412c1.291 0 1.98 1.524 1.125 2.493l-3.426 3.882M15.496 15h4m-4 4h3"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

FilterComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Filter = React.memo(FilterComponent);

export default Filter;
