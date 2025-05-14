import React from 'react';

const ExpensesComponent = props => {
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
        d="M3 7.567c0-1.774 0-2.66.368-3.338.323-.596.84-1.08 1.475-1.384C5.565 2.5 6.51 2.5 8.4 2.5h7.2c1.89 0 2.835 0 3.557.345a3.278 3.278 0 011.475 1.384C21 4.906 21 5.793 21 7.567V21.5l-2.148-1.465c-.34-.233-.51-.349-.694-.391a1 1 0 00-.492.011c-.181.05-.346.174-.676.422L15.094 21.5l-2.192-1.496c-.326-.222-.488-.333-.665-.376a.999.999 0 00-.474 0c-.177.043-.34.154-.665.376L8.906 21.5 7.01 20.077c-.33-.248-.494-.372-.676-.422a1 1 0 00-.492-.011c-.184.042-.354.158-.694.39L3 21.5V7.567z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7 8.787h10M7 13.549h10"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

ExpensesComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Expenses = React.memo(ExpensesComponent);

export default Expenses;
