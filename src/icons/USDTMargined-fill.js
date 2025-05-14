import React from 'react';

const UsdtMarginedFillComponent = props => {
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
        d="M12 3.4a8.6 8.6 0 108.6 8.6c0-.992-.168-1.944-.476-2.828a1 1 0 011.89-.657c.38 1.093.586 2.266.586 3.485 0 5.854-4.746 10.6-10.6 10.6-5.854 0-10.6-4.746-10.6-10.6C1.4 6.146 6.146 1.4 12 1.4c1.37 0 2.68.26 3.885.735a1 1 0 01-.733 1.86A8.575 8.575 0 0012 3.4z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.117 9.935v1.37l.001.002c2.502.117 4.382.623 4.382 1.227 0 .606-1.88 1.11-4.382 1.227v4.395H10.89v-4.395c-2.504-.118-4.389-.623-4.389-1.228 0-.606 1.883-1.11 4.39-1.227V9.935H7.805V7.844H16.2v2.09h-3.083zm0 3.45v.004c2.208-.101 3.857-.493 3.857-.962s-1.647-.86-3.857-.961v1.53c-.065.007-.409.036-1.097.036-.572 0-.988-.025-1.132-.035v-1.533c-2.213.1-3.866.493-3.866.961 0 .47 1.652.863 3.866.962v-.002c.143.008.546.024 1.122.024.72 0 1.044-.019 1.107-.024z"
      ></path>
    </svg>
  );
};

UsdtMarginedFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const UsdtMarginedFill = React.memo(UsdtMarginedFillComponent);

export default UsdtMarginedFill;
