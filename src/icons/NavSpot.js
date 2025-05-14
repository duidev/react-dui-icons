import React from 'react';

const NavSpotComponent = props => {
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
        d="M4.45 5.8A2.05 2.05 0 016.5 3.75a.75.75 0 100-1.5 3.551 3.551 0 00-3.454 2.728l-.066-.054a.75.75 0 10-.96 1.152L3.127 7a.806.806 0 001.323-.62V5.8zm15.1 12.4a2.05 2.05 0 01-2.05 2.05.75.75 0 000 1.5 3.551 3.551 0 003.454-2.728l.066.054a.75.75 0 10.96-1.152l-1.108-.923a.806.806 0 00-1.322.62v.58z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 14.5a5 5 0 00-5-5 5 5 0 005 5zM8.142 8.142a6.5 6.5 0 117.716 7.716 6.5 6.5 0 11-7.716-7.716zm1.586-.138A5.002 5.002 0 0119.5 9.5a5.002 5.002 0 01-3.504 4.772 6.5 6.5 0 00-6.268-6.268zm4.544 7.992A5.002 5.002 0 014.5 14.5a5.002 5.002 0 013.504-4.772 6.5 6.5 0 006.268 6.268z"
      ></path>
    </svg>
  );
};

NavSpotComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavSpot = React.memo(NavSpotComponent);

export default NavSpot;
