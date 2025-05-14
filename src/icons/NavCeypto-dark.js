import React from 'react';

const NavCeyptoDarkComponent = props => {
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
        d="M11.985 3.2a7.696 7.696 0 00-7.65 8.554.75.75 0 01-1.49.166 9.196 9.196 0 1118.29-.095.75.75 0 11-1.493-.15A7.696 7.696 0 0011.984 3.2z"
        fill="#F9F9F9"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.582 10.864a2 2 0 102.828-2.828 2 2 0 00-2.828 2.828zm-1.06-3.889a3.5 3.5 0 104.949 4.95 3.5 3.5 0 00-4.95-4.95z"
        fill="#00D5C8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.248 16.296l11.067-.32a.146.146 0 01.02.291l-4.333.511a.753.753 0 00-.658.834.747.747 0 00.83.659l4.334-.51a1.65 1.65 0 001.453-1.577 1.642 1.642 0 00-1.686-1.71l-11.347.328a1.215 1.215 0 00-1.177 1.216v2.712c0 .668.481 1.236 1.137 1.345l9.682 1.6c.678.111 1.374.01 1.992-.292l6.678-3.254a1.66 1.66 0 00.501-2.605 1.641 1.641 0 00-1.637-.482l-2.878.767a.753.753 0 00-.533.919c.105.4.514.64.914.533l2.878-.766a.15.15 0 01.15.044.152.152 0 01-.046.238l-6.678 3.254a1.82 1.82 0 01-1.095.16l-9.567-1.58v-2.315z"
        fill="#F9F9F9"
      ></path>
    </svg>
  );
};

NavCeyptoDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavCeyptoDark = React.memo(NavCeyptoDarkComponent);

export default NavCeyptoDark;
