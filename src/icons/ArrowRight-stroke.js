import React from 'react';

const ArrowRightComponent = props => {
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
        d="M8 19.873l7.25-7.25a1 1 0 000-1.414L8 3.958"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

ArrowRightComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ArrowRight = React.memo(ArrowRightComponent);

export default ArrowRight;
