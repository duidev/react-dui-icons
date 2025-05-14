import React from 'react';

const BidComponent = props => {
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
        d="M16.5 8.25c1.712 0 3.225.322 4.282.81 1.12.517 1.468 1.08 1.468 1.44 0 .36-.347.923-1.468 1.44-1.057.488-2.57.81-4.282.81-1.712 0-3.225-.322-4.282-.81-1.12-.517-1.468-1.08-1.468-1.44 0-.36.347-.923 1.468-1.44 1.057-.488 2.57-.81 4.282-.81z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.8 10.5v4.351c0 1.463 2.819 2.649 5.75 2.649s5.75-1.186 5.75-2.649V10.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M10.8 14.5v5.017c0 1.371 2.819 2.483 5.75 2.483s5.75-1.112 5.75-2.483V14.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7.5 2.75c1.712 0 3.225.322 4.282.81 1.12.517 1.468 1.08 1.468 1.44 0 .36-.347.923-1.468 1.44-1.057.488-2.57.81-4.282.81-1.712 0-3.225-.322-4.282-.81C2.098 5.923 1.75 5.36 1.75 5c0-.36.347-.923 1.468-1.44 1.057-.488 2.57-.81 4.282-.81z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7.7 17c-3.314 0-6-1.007-6-2.25V5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M1.7 9.5c0 1.38 2.462 2.5 5.5 2.5.424 0 .836-.022 1.232-.063"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

BidComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Bid = React.memo(BidComponent);

export default Bid;
