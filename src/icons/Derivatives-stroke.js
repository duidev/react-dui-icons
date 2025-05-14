import React from 'react';

const DerivativesComponent = props => {
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
        d="M8 8.25h4.936M8 13.25h4.936m7.814-6.5v12.5a3 3 0 01-3 3h-8m-6.5-17.5a3 3 0 013-3h9a3 3 0 013 3v12a3 3 0 01-3 3h-9a3 3 0 01-3-3v-12z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

DerivativesComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Derivatives = React.memo(DerivativesComponent);

export default Derivatives;
