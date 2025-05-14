import React from 'react';

const Deposit2Component = props => {
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
        d="M18.35 3.8a9.6 9.6 0 11-12.7 0"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path d="M12 12.2V3.5" strokeWidth="1.5" strokeLinecap="round"></path>
      <path
        d="M15 11l-2.85 2.28a.24.24 0 01-.3 0L9 11"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

Deposit2Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Deposit2 = React.memo(Deposit2Component);

export default Deposit2;
