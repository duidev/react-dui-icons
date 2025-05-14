import React from 'react';

const AuctionComponent = props => {
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
      <rect
        x="11.908"
        y="3.005"
        width="6.5"
        height="12.5"
        rx="1.25"
        transform="rotate(37.162 11.908 3.005)"
        strokeWidth="1.5"
      ></rect>
      <path
        d="M20.426 14.879a1.25 1.25 0 01.31 1.661l-.074.106-1.043 1.342a1.25 1.25 0 01-1.632.304l-.105-.072-5.818-4.362 2.58-3.316 5.782 4.337z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path d="M4 22h16" strokeWidth="1.5" strokeLinecap="round"></path>
    </svg>
  );
};

AuctionComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Auction = React.memo(AuctionComponent);

export default Auction;
