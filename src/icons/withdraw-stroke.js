import React from 'react';

const WithdrawComponent = props => {
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
        d="M18.35 4.314a9.6 9.6 0 11-12.7 0M12 12.839v-8.82m3 1.2l-2.85-2.28a.24.24 0 00-.3 0L9 5.219"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

WithdrawComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Withdraw = React.memo(WithdrawComponent);

export default Withdraw;
