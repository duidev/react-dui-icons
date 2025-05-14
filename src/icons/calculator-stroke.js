import React from 'react';

const CalculatorComponent = props => {
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
        d="M13.5 17h4m-11-8.01h2.192m0 0h2.193m-2.193 0v2.192m0-2.193V6.797M5.423 21h13.154a2.919 2.919 0 002.923-2.914V5.914A2.919 2.919 0 0018.577 3H5.423A2.919 2.919 0 002.5 5.914v12.172A2.919 2.919 0 005.423 21z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

CalculatorComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Calculator = React.memo(CalculatorComponent);

export default Calculator;
