import React from 'react';

const PolkadotEcoComponent = props => {
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
        d="M9.01 21.542c-4.058-1.274-7-5.065-7-9.542 0-5.405 4.286-9.808 9.646-9.994a.195.195 0 01.171.297L10.51 4.5m4.631-2c3.99 1.314 6.87 5.07 6.87 9.5 0 5.404-4.288 9.807-9.647 9.994a.195.195 0 01-.172-.297l1.318-2.197m-1.842-9.152l-1.333 6m2.675-.748h.01M9.621 12.33a3 3 0 111.521 1.047"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

PolkadotEcoComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const PolkadotEco = React.memo(PolkadotEcoComponent);

export default PolkadotEco;
