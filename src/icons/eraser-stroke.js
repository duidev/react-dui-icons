import React from 'react';

const EraserComponent = props => {
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
        x="1.047"
        y=".161"
        width="18.475"
        height="8.493"
        rx="2.25"
        transform="rotate(-36.294 22.633 5.554) skewX(-.106)"
        strokeWidth="1.5"
      ></rect>
      <path
        d="M12.972 7l4.492 6"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M7.483 19.95l13.513.05"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

EraserComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Eraser = React.memo(EraserComponent);

export default Eraser;
