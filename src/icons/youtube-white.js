import React from 'react';

const YoutubeWhiteComponent = props => {
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
      <rect width="24" height="24" rx="12" fill="#fff"></rect>
      <path
        d="M19.665 8.149a2.003 2.003 0 00-1.414-1.415C17.004 6.4 12 6.4 12 6.4s-5.004 0-6.25.334A2.004 2.004 0 004.334 8.15C4 9.396 4 12 4 12s0 2.604.335 3.851c.184.69.725 1.23 1.414 1.415C6.996 17.6 12 17.6 12 17.6s5.004 0 6.25-.334a2.003 2.003 0 001.415-1.415c.335-1.247.335-3.85.335-3.85s-.001-2.605-.335-3.852z"
        fill="#FD0101"
      ></path>
      <path d="M10.398 14.4l4.157-2.4-4.157-2.4v4.8z" fill="#fff"></path>
    </svg>
  );
};

YoutubeWhiteComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const YoutubeWhite = React.memo(YoutubeWhiteComponent);

export default YoutubeWhite;
