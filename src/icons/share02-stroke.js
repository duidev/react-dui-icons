import React from 'react';

const Share02Component = props => {
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
        d="M15.191 8.247h2.133a2.667 2.667 0 012.667 2.667v7.466a2.667 2.667 0 01-2.666 2.667H6.658A2.667 2.667 0 013.99 18.38v-7.466a2.667 2.667 0 012.667-2.667H8.79m-.27-2.65l2.895-2.412a1 1 0 011.28 0l2.895 2.413m-3.6-1.5v11.694"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

Share02Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Share02 = React.memo(Share02Component);

export default Share02;
