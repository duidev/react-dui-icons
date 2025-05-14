import React from 'react';

const NavCloudMiningComponent = props => {
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
        d="M7.865 12.2a.75.75 0 01.75-.75h6.77a.75.75 0 010 1.5h-6.77a.75.75 0 01-.75-.75z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 21.11a.75.75 0 01-.75-.75V12.5a.75.75 0 011.5 0v7.86a.75.75 0 01-.75.75z"
        fill="#00DDD3"
      ></path>
      <path d="M6.193 9.512l1.175-.089.192-1.163a4.502 4.502 0 018.88 0l.192 1.163 1.175.089A4 4 0 0117.5 17.5h-1.75a.75.75 0 000 1.5h1.75a5.5 5.5 0 00.42-10.984 6.002 6.002 0 00-11.84 0A5.5 5.5 0 006.5 19h1.75a.75.75 0 000-1.5H6.5a4 4 0 01-.307-7.988z"></path>
    </svg>
  );
};

NavCloudMiningComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavCloudMining = React.memo(NavCloudMiningComponent);

export default NavCloudMining;
