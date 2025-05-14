import React from 'react';

const NewcertifiedComponent = props => {
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
        d="M5.33 15.247a2.778 2.778 0 015.555 0m-1.111-4.47a1.667 1.667 0 11-3.334 0 1.667 1.667 0 013.334 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.232 10.79h4.383"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M14.232 14.667h4.383"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M1.996 7.444A4.444 4.444 0 016.44 3h11.111a4.444 4.444 0 014.445 4.444v9.112A4.444 4.444 0 0117.55 21H6.441a4.444 4.444 0 01-4.445-4.444V7.444z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

NewcertifiedComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Newcertified = React.memo(NewcertifiedComponent);

export default Newcertified;
