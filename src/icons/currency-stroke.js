import React from 'react';

const CurrencyComponent = props => {
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
        d="M12 7.4v.884m0 7.5v.716m.813-4.625H10v-3.03c0-.19.155-.345.346-.345h2.466a1.687 1.687 0 110 3.375zm0 0h-2.467a.346.346 0 00-.346.346v2.682c0 .192.155.347.346.347h2.466a1.688 1.688 0 000-3.375zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

CurrencyComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Currency = React.memo(CurrencyComponent);

export default Currency;
