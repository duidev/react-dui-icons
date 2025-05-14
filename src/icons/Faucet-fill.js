import React from 'react';

const FaucetFillComponent = props => {
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
        d="M17.513 20.735c.503-.871 1.195-1.735 1.195-1.735s.692.864 1.196 1.735c.287.497.512.997.512 1.34a1.708 1.708 0 01-3.416 0c0-.343.226-.843.513-1.34z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.7 1a.8.8 0 01.8-.8h6a.8.8 0 010 1.6h-2.2v1.9h.846c.913 0 1.654.74 1.654 1.654V7.2H17a4.8 4.8 0 014.8 4.8v5.146c0 .914-.74 1.654-1.654 1.654h-3.349c-.913 0-1.654-.74-1.654-1.654v-2.071a.2.2 0 00-.2-.2H12.99L6.995 14.8H5.242l-2.02 1.348A1.3 1.3 0 011.2 15.066V6.939a1.3 1.3 0 012.025-1.08L5.22 7.2H6.2V5.354c0-.913.74-1.654 1.654-1.654H8.7V1.8H6.5a.8.8 0 01-.8-.8zm2.154 4.3a.054.054 0 00-.054.054V7.5a1.3 1.3 0 01-1.3 1.3H5.128a1.3 1.3 0 01-.726-.221L2.8 7.502v7.003l1.63-1.087a1.3 1.3 0 01.721-.218H7.01l5.995.075h1.938a1.8 1.8 0 011.8 1.8v2.071c0 .03.024.054.054.054h3.349c.03 0 .054-.024.054-.054V12A3.2 3.2 0 0017 8.8h-4.5a1.3 1.3 0 01-1.3-1.3V5.354a.054.054 0 00-.054-.054H7.854z"
      ></path>
    </svg>
  );
};

FaucetFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const FaucetFill = React.memo(FaucetFillComponent);

export default FaucetFill;
