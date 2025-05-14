import React from 'react';

const AreaFillComponent = props => {
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
        d="M2.78 11.25h4.502a16.05 16.05 0 013.014-8.343A9.255 9.255 0 002.78 11.25zM12 3.15a14.55 14.55 0 00-3.214 8.101h6.428A14.55 14.55 0 0012 3.15zm3.214 9.601A14.55 14.55 0 0112 20.851a14.55 14.55 0 01-3.214-8.1h6.428zm-7.932 0H2.78a9.255 9.255 0 007.516 8.343 16.05 16.05 0 01-3.014-8.343zm6.422 8.343a16.05 16.05 0 003.014-8.343h4.502a9.255 9.255 0 01-7.516 8.343zm7.516-9.843h-4.502a16.05 16.05 0 00-3.014-8.343 9.255 9.255 0 017.516 8.343zM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12z"
      ></path>
    </svg>
  );
};

AreaFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const AreaFill = React.memo(AreaFillComponent);

export default AreaFill;
