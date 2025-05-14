import React from 'react';

const SimplicityFillComponent = props => {
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
      <path d="M9.246 14.001c.966 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 01-1.75 1.75H3.75A1.75 1.75 0 012 19.251v-3.5c0-.966.784-1.75 1.75-1.75h5.496zm11.004 0c.965 0 1.75.784 1.75 1.75v3.5a1.75 1.75 0 01-1.75 1.75h-5.496a1.75 1.75 0 01-1.75-1.75v-3.5c0-.966.783-1.75 1.75-1.75h5.496zm0-11.005c.965 0 1.75.784 1.75 1.75v5.503A1.75 1.75 0 0120.25 12H3.75A1.75 1.75 0 012 10.25V4.746a1.75 1.75 0 011.606-1.744l.144-.006h16.5z"></path>
    </svg>
  );
};

SimplicityFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const SimplicityFill = React.memo(SimplicityFillComponent);

export default SimplicityFill;
