import React from 'react';

const HomeCoinHandComponent = props => {
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
        d="M3.577 11.837a8.446 8.446 0 1116.799-.087m-2.808 4.692l2.891-.758a.914.914 0 01.91.272.924.924 0 01-.282 1.45l-6.693 3.25a2.58 2.58 0 01-1.567.222l-9.787-1.69a.612.612 0 01-.507-.6l-.017-2.762a.472.472 0 01.46-.475l11.439-.26a.914.914 0 01.118 1.82l-4.353.489m4.277-5.475a3.5 3.5 0 11-4.95-4.95 3.5 3.5 0 014.95 4.95z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

HomeCoinHandComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeCoinHand = React.memo(HomeCoinHandComponent);

export default HomeCoinHand;
