import React from 'react';

const ApiComponent = props => {
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
      <g
        clipPath="url(#clip0_2278_63)"
        strokeWidth="1.326"
        strokeLinecap="round"
      >
        <path d="M10.345 9.866L8.45 11.76"></path>
        <path d="M5.368 18.632a4.913 4.913 0 006.948 0l.849-.85a.764.764 0 000-1.08l-5.867-5.867a.764.764 0 00-1.08 0l-.85.85a4.912 4.912 0 000 6.947zm0 0l-1.894 1.894"></path>
        <path d="M18.632 5.368a4.913 4.913 0 010 6.948l-.85.849a.764.764 0 01-1.08 0l-5.867-5.867a.764.764 0 010-1.08l.85-.85a4.913 4.913 0 016.947 0zm0 0l1.894-1.894"></path>
        <path d="M13.926 13.447L12.03 15.34"></path>
      </g>
      <defs>
        <clipPath id="clip0_2278_63">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ApiComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Api = React.memo(ApiComponent);

export default Api;
