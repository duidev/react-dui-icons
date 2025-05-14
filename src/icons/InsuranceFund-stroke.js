import React from 'react';

const InsuranceFundComponent = props => {
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
        d="M6 11v4m12-6v4m-1-9c2.449 0 3.773.375 4.432.665a.708.708 0 01.258.18c.076.072.215.284.25.383.06.165.06.255.06.435V16.41c0 .909 0 1.363-.136 1.597a.872.872 0 01-.532.44c-.255.089-.77-.01-1.8-.208A13.44 13.44 0 0017 18c-3 0-6 2-10 2-2.449 0-3.773-.375-4.432-.665-.088-.04-.132-.059-.258-.18a1.463 1.463 0 01-.25-.383C2 18.607 2 18.517 2 18.337V7.59c0-.909 0-1.363.136-1.597a.871.871 0 01.532-.44c.255-.089.77.01 1.8.208C5.188 5.898 6.043 6 7 6c3 0 6-2 10-2zm-2.5 8a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

InsuranceFundComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const InsuranceFund = React.memo(InsuranceFundComponent);

export default InsuranceFund;
