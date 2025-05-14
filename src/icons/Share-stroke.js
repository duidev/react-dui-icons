import React from 'react';

const ShareComponent = props => {
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
        d="M13.823 7.75S1.46 7.75 2.775 21.294c.01.106.157.135.193.034.702-1.972 3.01-7.155 10.855-8.078v5.119a.5.5 0 00.885.32l6.506-7.807a.2.2 0 00-.004-.26l-7.212-8.174a.1.1 0 00-.174.066V7.75z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

ShareComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Share = React.memo(ShareComponent);

export default Share;
