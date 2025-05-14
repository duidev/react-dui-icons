import React from 'react';

const OffersComponent = props => {
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
        d="M11.628 8.207h5m-5 4h5M7.25 20.5h10a3 3 0 003-3v-11a3 3 0 00-3-3h-7a3 3 0 00-3 3v14zm0 0v-7a1 1 0 00-1-1h-1.5a1 1 0 00-1 1v6a1 1 0 001 1h2.5z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

OffersComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Offers = React.memo(OffersComponent);

export default Offers;
