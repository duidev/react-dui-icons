import React from 'react';

const MarkerPinComponent = props => {
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
        d="M12 1.75c-5.135 0-9.25 4.006-9.25 8.89 0 3.264 2.13 6.12 4.493 8.22a22.392 22.392 0 003.292 2.421c.468.28.866.491 1.16.63.128.06.23.102.305.131.075-.029.177-.071.306-.132.293-.138.691-.348 1.159-.629a22.39 22.39 0 003.292-2.42c2.363-2.102 4.493-4.957 4.493-8.22 0-4.885-4.115-8.891-9.25-8.891z"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.05 8.114a3 3 0 110 6 3 3 0 010-6z"
        strokeWidth="1.501"
      ></path>
    </svg>
  );
};

MarkerPinComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const MarkerPin = React.memo(MarkerPinComponent);

export default MarkerPin;
