import React from 'react';

const AssetsFillComponent = props => {
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
        d="M13.833 2.712v5.62c0 1.013.82 1.834 1.833 1.834h5.36c1.066 0 1.874-.909 1.539-1.92a11.47 11.47 0 00-2.774-4.497c-1.556-1.557-3.127-2.236-4.265-2.531-.934-.242-1.693.53-1.693 1.494zm-6.26-.483a10.764 10.764 0 00-3.42 17.528 10.765 10.765 0 0017.529-3.42c.638-1.51.957-2.266.319-3.23-.639-.962-1.685-.962-3.776-.962h-2.153c-2.03 0-3.045 0-3.676-.631-.63-.63-.63-1.646-.63-3.676V5.685c0-2.091 0-3.137-.964-3.776-.963-.638-1.718-.319-3.229.32z"
      ></path>
    </svg>
  );
};

AssetsFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const AssetsFill = React.memo(AssetsFillComponent);

export default AssetsFill;
