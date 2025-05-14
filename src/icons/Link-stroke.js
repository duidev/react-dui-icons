import React from 'react';

const LinkComponent = props => {
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
        d="M10.01 6.716l2.803-2.21a5.21 5.21 0 017.316.866v0a5.21 5.21 0 01-.866 7.316l-2.754 2.17"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M7.146 8.973l-2.519 1.985a5.21 5.21 0 00-.866 7.316v0a5.21 5.21 0 007.316.867l2.78-2.192"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M9.132 13.813l6.065-4.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

LinkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Link = React.memo(LinkComponent);

export default Link;
