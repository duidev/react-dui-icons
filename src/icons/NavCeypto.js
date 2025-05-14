import React from 'react';

const NavCeyptoComponent = props => {
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
        d="M10.582 10.864a2 2 0 102.828-2.828 2 2 0 00-2.828 2.828zm-1.06-3.889a3.5 3.5 0 104.949 4.95 3.5 3.5 0 00-4.95-4.95z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.288 10.897a7.696 7.696 0 1115.354.778.75.75 0 101.493.15 9.196 9.196 0 10-18.29.095.75.75 0 101.49-.166 7.79 7.79 0 01-.047-.857zm10.155 4.946l-11.164.253.015 2.371 9.675 1.67c.378.065.767.01 1.113-.158l6.694-3.25a.17.17 0 00.052-.268.169.169 0 00-.168-.05l-2.891.758a.747.747 0 01-.913-.537.753.753 0 01.537-.917l2.892-.758a1.66 1.66 0 011.652.493 1.678 1.678 0 01-.511 2.632l-6.694 3.25a3.327 3.327 0 01-2.02.286L2.925 19.93a1.36 1.36 0 01-1.127-1.334l-.018-2.762a1.224 1.224 0 011.194-1.234l11.439-.258a1.657 1.657 0 011.69 1.714 1.666 1.666 0 01-1.475 1.603l-4.353.489a.747.747 0 01-.826-.664.753.753 0 01.663-.83l4.352-.488a.161.161 0 00-.02-.322z"
      ></path>
    </svg>
  );
};

NavCeyptoComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavCeypto = React.memo(NavCeyptoComponent);

export default NavCeypto;
