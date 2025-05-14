import React from 'react';

const CloseCircleComponent = props => {
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
        d="M8.317 8.815l3.188 3.189m0 0l3.19 3.189m-3.19-3.189l3.189-3.189m-3.189 3.189l-3.188 3.189M20.5 12a9 9 0 11-18 0 9 9 0 0118 0z"
        strokeWidth="1.501"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

CloseCircleComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const CloseCircle = React.memo(CloseCircleComponent);

export default CloseCircle;
