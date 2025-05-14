import React from 'react';

const UnexpectedExpensesComponent = props => {
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
        d="M10 3.155a4 4 0 014 0l4.66 2.69a4 4 0 012 3.465v5.38a4 4 0 01-2 3.465L14 20.845a4 4 0 01-4 0l-4.66-2.69a4 4 0 01-2-3.464V9.31a4 4 0 012-3.465L10 3.155z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 8.4v4.95m0 2.25h.009"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

UnexpectedExpensesComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const UnexpectedExpenses = React.memo(UnexpectedExpensesComponent);

export default UnexpectedExpenses;
