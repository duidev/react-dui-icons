import React from 'react';

const SwitchVertical01Component = props => {
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
        d="M7 4v16l-4-4m14 4V4l4 4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

SwitchVertical01Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const SwitchVertical01 = React.memo(SwitchVertical01Component);

export default SwitchVertical01;
