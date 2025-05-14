import React from 'react';

const SortSolidUpFillComponent = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="dui-icon"
      fill="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        d="M17.598 13.6H6.402c-.336 0-.524.314-.316.529l5.598 5.748c.16.164.468.164.63 0l5.598-5.748c.208-.215.02-.529-.316-.529z"
        fill="#9DA0A0"
      ></path>
      <path d="M17.913 9.872l-5.598-5.748a.464.464 0 00-.63 0L6.087 9.872c-.208.214-.02.528.316.528h11.195c.335 0 .523-.314.315-.528z"></path>
    </svg>
  );
};

SortSolidUpFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const SortSolidUpFill = React.memo(SortSolidUpFillComponent);

export default SortSolidUpFill;
