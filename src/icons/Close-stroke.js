import React from 'react';

const CloseComponent = props => {
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
        d="M4.894 4.775l14.212 14.363m-.005-14.12L4.894 19.225"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

CloseComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Close = React.memo(CloseComponent);

export default Close;
