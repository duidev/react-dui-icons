import React from 'react';

const HomeMarginComponent = props => {
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
      <circle cx="8.491" cy="7.8" r="5" strokeWidth="1.5"></circle>
      <circle cx="18.991" cy="10.8" r="3" strokeWidth="1.5"></circle>
      <path
        d="M2.991 12.5l19.5 2.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M9.996 17.886l.837-1.023a2.143 2.143 0 013.317 0l.837 1.023c.801.98.104 2.45-1.161 2.45h-2.67c-1.265 0-1.962-1.47-1.16-2.45z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

HomeMarginComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeMargin = React.memo(HomeMarginComponent);

export default HomeMargin;
