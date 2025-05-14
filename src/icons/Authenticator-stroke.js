import React from 'react';

const AuthenticatorComponent = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="dui-icon"
      fill="none"
      stroke="currentcolor"
      color={color}
      {...otherProps}
    >
      <path d="M3 12h18" strokeWidth="1.5" strokeLinecap="round"></path>
      <path
        d="M7.5 19.5l9-15.588"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M7.5 3.75l9 15.589"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

AuthenticatorComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Authenticator = React.memo(AuthenticatorComponent);

export default Authenticator;
