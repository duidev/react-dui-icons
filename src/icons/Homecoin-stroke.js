import React from 'react';

const HomecoinComponent = props => {
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
        d="M8.991 21.542c-4.057-1.274-7-5.064-7-9.542 0-5.404 4.287-9.807 9.646-9.994a.195.195 0 01.172.297L10.492 4.5m4.631-2c3.99 1.314 6.87 5.071 6.87 9.5 0 5.405-4.288 9.808-9.647 9.994a.195.195 0 01-.172-.297l1.318-2.197m1.682-9.217L13.76 8.868a2.5 2.5 0 00-3.536 0L8.81 10.283a2.5 2.5 0 000 3.535l1.414 1.414a2.5 2.5 0 003.536 0l1.414-1.414a2.5 2.5 0 000-3.535z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

HomecoinComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Homecoin = React.memo(HomecoinComponent);

export default Homecoin;
