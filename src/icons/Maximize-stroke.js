import React from 'react';

const MaximizeComponent = props => {
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
        d="M13.778 10.222L20 4m0 0h-5.333M20 4v5.333m-9.778 4.445L4 20m0 0h5.333M4 20v-5.333"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

MaximizeComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Maximize = React.memo(MaximizeComponent);

export default Maximize;
