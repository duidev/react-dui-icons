import React from 'react';

const MatintenanceCostsComponent = props => {
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
        d="M20 10V5a2 2 0 00-2-2H6a2 2 0 00-2 2v14a2 2 0 002 2h4m8.91-7a3.471 3.471 0 010 4.91m0 0a3.471 3.471 0 01-4.91 0m4.91 0l2.454 2.454M7 8h8m-8 5h5"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

MatintenanceCostsComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const MatintenanceCosts = React.memo(MatintenanceCostsComponent);

export default MatintenanceCosts;
