import React from 'react';

const MinusFillComponent = props => {
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
      <path d="M6 11h12v2H6v-2z"></path>
    </svg>
  );
};

MinusFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const MinusFill = React.memo(MinusFillComponent);

export default MinusFill;
