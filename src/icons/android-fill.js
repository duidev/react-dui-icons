import React from 'react';

const AndroidFillComponent = props => {
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
        d="M17.532 15.106a1.003 1.003 0 11-.001-2.007 1.003 1.003 0 01.002 2.007h-.001zm-11.044 0a1.004 1.004 0 110-2.008 1.004 1.004 0 01.001 2.008h-.001zm11.4-6.018l2.006-3.459a.414.414 0 10-.721-.407l-2.027 3.5a12.243 12.243 0 00-5.13-1.108c-1.85 0-3.595.398-5.141 1.098l-2.027-3.5a.414.414 0 00-.72.407l1.995 3.458C2.696 10.947.345 14.417 0 18.523h24c-.334-4.096-2.675-7.565-6.112-9.435z"
        fill="#222727"
      ></path>
    </svg>
  );
};

AndroidFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const AndroidFill = React.memo(AndroidFillComponent);

export default AndroidFill;
