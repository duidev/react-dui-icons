import React from 'react';

const PlusFillComponent = props => {
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
      <path d="M13 11V6h-2v5H6v2h5v5h2v-5h5v-2h-5z"></path>
    </svg>
  );
};

PlusFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const PlusFill = React.memo(PlusFillComponent);

export default PlusFill;
