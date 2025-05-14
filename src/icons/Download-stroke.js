import React from 'react';

const DownloadComponent = props => {
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
        d="M8.529 13.147l2.896 2.413a1 1 0 001.28 0l2.895-2.413m-3.6 1.5V2.953m3.2 5.294h2.133A2.667 2.667 0 0120 10.914v7.466a2.667 2.667 0 01-2.667 2.667H6.667A2.667 2.667 0 014 18.38v-7.466a2.667 2.667 0 012.667-2.667H8.8"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

DownloadComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Download = React.memo(DownloadComponent);

export default Download;
