import React from 'react';

const GoogleComponent = props => {
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
      <g clipPath="url(#clip0_516_41)">
        <g clipPath="url(#clip1_516_41)">
          <path
            d="M17.327 15.668c2.843-1.561 4.998-2.75 5.184-2.843.594-.316 1.208-1.153 0-1.802-.39-.205-2.49-1.357-5.184-2.844l-3.735 3.772 3.735 3.717z"
            fill="#FFD900"
          ></path>
          <path
            d="M13.592 11.951L1.699 23.938c.279.037.594-.037.966-.242.78-.427 9.05-4.943 14.662-8.027l-3.735-3.718z"
            fill="#F43249"
          ></path>
          <path
            d="M13.592 11.951l3.735-3.753S3.5.653 2.665.208C2.349.02 1.996-.036 1.68.02l11.912 11.93z"
            fill="#00EE76"
          ></path>
          <path
            d="M13.592 11.951L1.68.021C1.197.132.788.559.788 1.433v21.092c0 .8.316 1.376.91 1.431l11.894-12.005z"
            fill="#00D3FF"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_516_41">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
        <clipPath id="clip1_516_41">
          <rect
            width="22.423"
            height="24"
            fill="#fff"
            transform="translate(.788)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

GoogleComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Google = React.memo(GoogleComponent);

export default Google;
