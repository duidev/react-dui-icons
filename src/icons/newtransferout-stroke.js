import React from 'react';

const NewtransferoutComponent = props => {
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
        d="M14.928 20.5H6.545a4 4 0 01-4-4v-9a4 4 0 014-4h11.46a4 4 0 014 4v6.094"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.004 8.813h18.892"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.977 17.483h6.936l-1.753-1.658"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

NewtransferoutComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Newtransferout = React.memo(NewtransferoutComponent);

export default Newtransferout;
