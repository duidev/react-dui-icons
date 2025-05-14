import React from 'react';

const CouponComponent = props => {
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
        d="M1.996 7.454a3.636 3.636 0 013.636-3.636h12.727a3.636 3.636 0 013.637 3.636v1.974a2.728 2.728 0 000 5.144v1.973a3.636 3.636 0 01-3.637 3.637H5.632a3.636 3.636 0 01-3.636-3.637v-1.973a2.728 2.728 0 000-5.144V7.454z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M13.48 9.364a1.868 1.868 0 00-.853-.595 2.215 2.215 0 00-1.098-.091 2.024 2.024 0 00-.972.441 1.556 1.556 0 00-.52.827 1.39 1.39 0 00.108.933c.144.295.387.547.7.724.312.177.67.206 1.055.272.728.126 1.345.357 1.654.99.144.296.182.62.108.934-.073.313-.254.6-.52.826-.266.226-.604.38-.973.442-.368.062-.75.03-1.098-.092a1.867 1.867 0 01-.852-.595m1.792-6.722v.975m0 7.002v.388"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

CouponComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Coupon = React.memo(CouponComponent);

export default Coupon;
