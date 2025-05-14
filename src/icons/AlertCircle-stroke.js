import React from 'react';

const AlertCircleComponent = props => {
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
        d="M12 8.4v4.95m0 2.25h.009M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

AlertCircleComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const AlertCircle = React.memo(AlertCircleComponent);

export default AlertCircle;
