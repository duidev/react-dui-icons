import React from 'react';

const NavSpotDarkComponent = props => {
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
        d="M6.5 3.75A2.05 2.05 0 004.45 5.8v.58A.806.806 0 013.127 7L2.02 6.075a.75.75 0 11.96-1.152l.066.054A3.551 3.551 0 016.5 2.25a.75.75 0 010 1.5zm14.454 15.272l.066.054a.75.75 0 10.96-1.152l-1.108-.923a.806.806 0 00-1.322.62v.58a2.05 2.05 0 01-2.05 2.05.75.75 0 000 1.5 3.552 3.552 0 003.454-2.73z"
        fill="#00D5C8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 14.5a5 5 0 100-10 5 5 0 000 10zm0 1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        fill="#F9F9F9"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 19.5a5 5 0 100-10 5 5 0 000 10zm0 1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        fill="#F9F9F9"
      ></path>
    </svg>
  );
};

NavSpotDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavSpotDark = React.memo(NavSpotDarkComponent);

export default NavSpotDark;
