import React from 'react';

const CreditCardComponent = props => {
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
        d="M2.536 8.813V16.5a4 4 0 004 4H17.95a4 4 0 004-3.937l.046-2.97V7.5a4 4 0 00-4-4H6.536a4 4 0 00-4 4v1.313zm0 0h19.351M12.995 15h4.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

CreditCardComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const CreditCard = React.memo(CreditCardComponent);

export default CreditCard;
