import React from 'react';

const AddressbookComponent = props => {
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
      <rect
        x="3.15"
        y="1.95"
        width="18.9"
        height="20.1"
        rx="2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></rect>
      <path
        d="M13.2 5.55a2.85 2.85 0 110 5.701 2.85 2.85 0 010-5.701z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path d="M1.2 8.4h3.6" strokeWidth="1.5" strokeLinecap="round"></path>
      <path d="M1.2 14.4h3.6" strokeWidth="1.5" strokeLinecap="round"></path>
      <path
        d="M18 16.8v0a4.8 4.8 0 00-4.8-4.8v0a4.8 4.8 0 00-4.8 4.8v0"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

AddressbookComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Addressbook = React.memo(AddressbookComponent);

export default Addressbook;
