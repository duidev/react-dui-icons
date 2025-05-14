import React from 'react';

const NavOptionComponent = props => {
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
        d="M8 8.25a.75.75 0 000 1.5h8a.75.75 0 000-1.5H8zm0 4a.75.75 0 000 1.5h4a.75.75 0 000-1.5H8z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.25 5.4c0-1.757 1.456-3.15 3.212-3.15h11.076c1.756 0 3.212 1.393 3.212 3.15V11a.75.75 0 01-1.5 0V5.4c0-.893-.748-1.65-1.712-1.65H6.462c-.964 0-1.712.757-1.712 1.65v13.4c0 .894.748 1.65 1.711 1.65h4.923a.75.75 0 110 1.5H6.461c-1.755 0-3.211-1.392-3.211-3.15V5.4zm18.28 12.293a.75.75 0 01-1.06 0l-.151-.15v3.578a.75.75 0 11-1.5 0v-5.39a.75.75 0 011.28-.53l1.432 1.431a.75.75 0 010 1.061zm-5.81 1.466a.75.75 0 10-1.06 1.06l1.43 1.432a.75.75 0 001.282-.53v-5.39a.75.75 0 00-1.5 0v3.578l-.152-.15z"
      ></path>
    </svg>
  );
};

NavOptionComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavOption = React.memo(NavOptionComponent);

export default NavOption;
