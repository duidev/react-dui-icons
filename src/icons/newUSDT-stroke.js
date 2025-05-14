import React from 'react';

const NewUsdtComponent = props => {
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
        d="M9.273 8.182h5.454m-2.727 8V8.364m-2.727 1.761c-1.104.332-1.818.86-1.818 1.455 0 1.004 2.035 1.818 4.545 1.818s4.545-.814 4.545-1.818c0-.653-.86-1.226-2.152-1.546"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth="1.5"
        strokeLinejoin="round"
      ></circle>
    </svg>
  );
};

NewUsdtComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NewUsdt = React.memo(NewUsdtComponent);

export default NewUsdt;
