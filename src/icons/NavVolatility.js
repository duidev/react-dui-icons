import React from 'react';

const NavVolatilityComponent = props => {
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
        d="M9.25 12.002a.75.75 0 01.75-.75h2.25a2.5 2.5 0 010 5h-2.06a.94.94 0 01-.94-.94v-3.31zm4 1.75a1 1 0 00-1-1h-1.5v2h1.5a1 1 0 001-1z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.75 9.252v2h1.5a1 1 0 100-2h-1.5zm4 1a2.5 2.5 0 00-2.5-2.5h-2.06a.94.94 0 00-.94.94v3.31c0 .414.336.75.75.75h2.25a2.5 2.5 0 002.5-2.5z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.752a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 14.752a.75.75 0 01.75.75v1a.75.75 0 01-1.5 0v-1a.75.75 0 01.75-.75z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.599 2.754a.75.75 0 00-.064-1.499C5.813 1.5 1.25 6.215 1.25 11.995c0 5.938 4.813 10.75 10.75 10.75a10.75 10.75 0 009.599-5.905.75.75 0 10-1.339-.677A9.25 9.25 0 1111.6 2.753zm1.931-.67a.75.75 0 00.562.899c.311.072.617.16.915.262.38.13.806-.023.984-.381.191-.384.024-.853-.38-.997a10.68 10.68 0 00-1.181-.346.75.75 0 00-.9.562zm5.522 2.83c-.293.29-.762.287-1.076.02a9.272 9.272 0 00-.804-.608c-.33-.224-.465-.656-.287-1.014.191-.384.667-.533 1.026-.296.394.26.77.545 1.126.853.315.272.312.753.015 1.046zm.552 1.814c-.221-.32-.2-.756.077-1.028.314-.311.83-.287 1.086.073.23.324.443.662.637 1.01a.71.71 0 01-.325.98c-.377.185-.83.022-1.038-.343a9.248 9.248 0 00-.437-.692zm2.36 4.401c-.413.036-.774-.27-.843-.68a9.179 9.179 0 00-.166-.781.804.804 0 01.406-.93c.405-.199.896-.001 1.014.435.102.375.184.758.245 1.147.064.41-.244.773-.656.809zm-.755 1.743a.802.802 0 01.714-.736c.443-.038.827.313.79.757-.03.367-.08.73-.146 1.086a.75.75 0 11-1.474-.275c.05-.273.09-.55.116-.832z"
      ></path>
    </svg>
  );
};

NavVolatilityComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavVolatility = React.memo(NavVolatilityComponent);

export default NavVolatility;
