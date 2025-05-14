import React from 'react';

const CryptoAssetComponent = props => {
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
      <path d="M1.991 10h18.4" strokeWidth="1.5"></path>
      <path
        d="M11.946 21H6.49a4 4 0 01-4-4V9a4 4 0 014-4h10a4 4 0 014 4v3"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <rect
        x="14.741"
        y="16.55"
        width="6.5"
        height="4.5"
        rx=".75"
        strokeWidth="1.5"
      ></rect>
      <path
        d="M19.741 16.244v-.694a1.75 1.75 0 00-1.75-1.75v0a1.75 1.75 0 00-1.75 1.75v.694"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

CryptoAssetComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const CryptoAsset = React.memo(CryptoAssetComponent);

export default CryptoAsset;
