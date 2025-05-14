import React from 'react';

const FundingRateComponent = props => {
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
        d="M3.28 5.595C3 6.025 3 6.576 3 7.678v4.763c0 4.064 2.818 7.618 6.861 8.652l1.01.259a4.751 4.751 0 002.368-.004l.905-.234C18.187 20.066 21 16.508 21 12.44V7.669c0-1.098 0-1.648-.279-2.076a1.743 1.743 0 00-.132-.178c-.332-.39-.87-.562-1.943-.904h0l-5.531-1.764c-.497-.158-.746-.238-1.003-.246a1.86 1.86 0 00-.113 0c-.257.007-.506.086-1.004.242l-5.63 1.773h0c-1.078.34-1.618.51-1.951.902a1.75 1.75 0 00-.133.177z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M13.48 9.364a1.868 1.868 0 00-.853-.595 2.215 2.215 0 00-1.098-.091 2.024 2.024 0 00-.972.441 1.556 1.556 0 00-.52.827 1.39 1.39 0 00.108.933c.144.295.387.547.7.724.312.177.67.206 1.055.272.728.126 1.345.357 1.654.99.144.296.182.62.108.934-.073.313-.254.6-.52.826-.266.226-.604.38-.973.442-.368.062-.75.03-1.098-.092a1.867 1.867 0 01-.852-.595m1.792-6.722v.991m0 6.439v.935"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

FundingRateComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const FundingRate = React.memo(FundingRateComponent);

export default FundingRate;
