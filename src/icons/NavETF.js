import React from 'react';

const NavEtfComponent = props => {
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
        d="M13.25 9a.75.75 0 01.75-.75h1.759c.757 0 1.136.916.6 1.451l-3.303 3.304-2.5-2L8.53 13.03a.75.75 0 11-1.06-1.06l2.436-2.437a.85.85 0 011.132-.063l1.906 1.525L14.19 9.75H14a.75.75 0 01-.75-.75z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 4.7H6a2.5 2.5 0 00-2.5 2.5v7.5A2.5 2.5 0 006 17.2h12a2.5 2.5 0 002.5-2.5V7.2A2.5 2.5 0 0018 4.7zM6 3.2a4 4 0 00-4 4v7.5a4 4 0 004 4h5.25v.95H9a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-2.25v-.95H18a4 4 0 004-4V7.2a4 4 0 00-4-4H6z"
      ></path>
    </svg>
  );
};

NavEtfComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavEtf = React.memo(NavEtfComponent);

export default NavEtf;
