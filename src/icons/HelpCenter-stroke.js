import React from 'react';

const HelpCenterComponent = props => {
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
        d="M4.683 15.654V9.8a7.3 7.3 0 017.3-7.3v0a7.3 7.3 0 017.3 7.3v6.681a5.019 5.019 0 01-5.019 5.019v0H12.05"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M2.35 9.404H4.7v6.25a.25.25 0 01-.25.25h-2.1c-.69 0-1.25-.56-1.25-1.25v-4c0-.69.56-1.25 1.25-1.25zm19.3 0c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2.1a.25.25 0 01-.25-.25v-6.25h2.35z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

HelpCenterComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HelpCenter = React.memo(HelpCenterComponent);

export default HelpCenter;
