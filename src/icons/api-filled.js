import React from 'react';

const ApiFilledComponent = props => {
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
      <g clipPath="url(#clip0_1746_167)">
        <path
          d="M23.933 1.317L22.686.07a.244.244 0 00-.335 0l-2.24 2.238A5.861 5.861 0 0016.815 1.3a5.866 5.866 0 00-4.162 1.723L9.655 6.02a.236.236 0 000 .333l7.992 7.992a.231.231 0 00.168.067c.058 0 .12-.023.167-.067l2.998-2.998a5.889 5.889 0 00.714-7.456l2.239-2.239a.24.24 0 000-.335zm-9.966 11.704a.236.236 0 00-.332 0l-1.96 1.959-2.655-2.656 1.962-1.962a.236.236 0 000-.332l-1.07-1.071a.236.236 0 00-.333 0L7.617 10.92 6.352 9.656a.23.23 0 00-.168-.068.249.249 0 00-.167.068l-2.995 2.997a5.888 5.888 0 00-.714 7.457L.069 22.348a.236.236 0 000 .333l1.247 1.247a.243.243 0 00.335 0l2.24-2.239a5.862 5.862 0 003.296 1.01 5.866 5.866 0 004.163-1.724l2.997-2.998a.236.236 0 000-.332l-1.265-1.265 1.962-1.962a.236.236 0 000-.332l-1.077-1.065z"
          fill="#222727"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1746_167">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

ApiFilledComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ApiFilled = React.memo(ApiFilledComponent);

export default ApiFilled;
