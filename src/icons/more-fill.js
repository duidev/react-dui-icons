import React from 'react';

const MoreFillComponent = props => {
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
        d="M10.2 10.8a1.2 1.2 0 011.2-1.2h1.2a1.2 1.2 0 011.2 1.2V12a1.2 1.2 0 01-1.2 1.2h-1.2a1.2 1.2 0 01-1.2-1.2v-1.2zm-7.2 0a1.2 1.2 0 011.2-1.2h1.2a1.2 1.2 0 011.2 1.2V12a1.2 1.2 0 01-1.2 1.2H4.2A1.2 1.2 0 013 12v-1.2zm15.6-1.2a1.2 1.2 0 00-1.2 1.2V12a1.2 1.2 0 001.2 1.2h1.2A1.2 1.2 0 0021 12v-1.2a1.2 1.2 0 00-1.2-1.2h-1.2z"
      ></path>
    </svg>
  );
};

MoreFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const MoreFill = React.memo(MoreFillComponent);

export default MoreFill;
