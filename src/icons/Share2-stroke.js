import React from 'react';

const Share2Component = props => {
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
        d="M10.527 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3v-5.509M15.167 3h4.267c.829 0 1.5.67 1.5 1.495V8.19m-.438-4.63l-8.5 8.471"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Share2Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Share2 = React.memo(Share2Component);

export default Share2;
