import React from 'react';

const More2FillComponent = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2 3a1.2 1.2 0 011.2 1.2v1.2a1.2 1.2 0 01-1.2 1.2H12a1.2 1.2 0 01-1.2-1.2V4.2A1.2 1.2 0 0112 3h1.2zm0 7.2a1.2 1.2 0 011.2 1.2v1.2a1.2 1.2 0 01-1.2 1.2H12a1.2 1.2 0 01-1.2-1.2v-1.2a1.2 1.2 0 011.2-1.2h1.2zm1.2 8.4a1.2 1.2 0 00-1.2-1.2H12a1.2 1.2 0 00-1.2 1.2v1.2A1.2 1.2 0 0012 21h1.2a1.2 1.2 0 001.2-1.2v-1.2z"
      ></path>
    </svg>
  );
};

More2FillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const More2Fill = React.memo(More2FillComponent);

export default More2Fill;
