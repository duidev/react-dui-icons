import React from 'react';

const NavOtcComponent = props => {
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
        d="M3.75 12a8.25 8.25 0 0116.5 0 .75.75 0 001.5 0c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12s4.365 9.75 9.75 9.75a.75.75 0 000-1.5A8.25 8.25 0 013.75 12zm6.5.5a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zm2.25-3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.828 21.341a.75.75 0 010-1.061l.15-.15h-3.577a.75.75 0 110-1.501h5.389a.75.75 0 01.53 1.28l-1.431 1.432a.75.75 0 01-1.061 0z"
        fill="#00D5C8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.363 14.47a.75.75 0 010 1.06l-.151.151h3.578a.75.75 0 010 1.501H16.4a.75.75 0 01-.53-1.28L17.3 14.47a.75.75 0 011.062 0z"
        fill="#00D5C8"
      ></path>
    </svg>
  );
};

NavOtcComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavOtc = React.memo(NavOtcComponent);

export default NavOtc;
