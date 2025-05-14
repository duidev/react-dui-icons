import React from 'react';

const HashrateComponent = props => {
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
        d="M3.249 12.972v7.78m11.668-7.78v7.78M9.083 3.247v17.503M20.752 3.248v17.503"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

HashrateComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Hashrate = React.memo(HashrateComponent);

export default Hashrate;
