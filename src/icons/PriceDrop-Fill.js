import React from 'react';

const PriceDropFillComponent = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 5h-4v6.657H6.343L12 17.314l5.657-5.657H14V5z"
        fill="url(#paint0_linear_151_33)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_151_33"
          x1="12"
          y1="5"
          x2="12"
          y2="17.314"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F74A4C" stopOpacity="0"></stop>
          <stop offset=".401" stopColor="#F74A4C"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

PriceDropFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const PriceDropFill = React.memo(PriceDropFillComponent);

export default PriceDropFill;
