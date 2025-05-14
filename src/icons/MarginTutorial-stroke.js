import React from 'react';

const MarginTutorialComponent = props => {
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
      <g clipPath="url(#clip0_1224_57)" strokeWidth="1.5">
        <path d="M4.75 17.934c0 .31.061.578.18.793l.054.088C5.764 19.968 7.934 22.5 12 22.5c3.812 0 5.958-2.224 6.854-3.452l.162-.232c.154-.227.234-.527.234-.881v-5.8l-4.176 2.137a6.751 6.751 0 01-5.782.172l-.366-.172-4.176-2.137v5.8z"></path>
        <path d="M14.604 3.353a5.25 5.25 0 00-4.902-.162l-.306.162L1.41 7.915a1.25 1.25 0 00-.147 2.072l.147.098 7.985 4.563a5.25 5.25 0 004.902.162l.306-.162 7.985-4.563a1.25 1.25 0 00.147-2.072l-.147-.098-7.984-4.562z"></path>
        <path
          d="M18 9l2.894 1.447A2 2 0 0122 12.237V17"
          strokeLinecap="round"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1224_57">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

MarginTutorialComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const MarginTutorial = React.memo(MarginTutorialComponent);

export default MarginTutorial;
