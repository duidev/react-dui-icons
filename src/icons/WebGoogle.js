import React from 'react';

const WebGoogleComponent = props => {
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
        d="M12 4.64c2.253 0 3.773.973 4.64 1.787l3.387-3.307C17.947 1.187 15.24 0 12 0 7.307 0 3.253 2.693 1.28 6.613l3.88 3.014C6.133 6.733 8.827 4.64 12 4.64z"
        fill="#EA4335"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.52 12.267c0-.987-.08-1.707-.253-2.454H12v4.454h6.613c-.133 1.106-.853 2.773-2.453 3.893l3.787 2.933C22.213 19 23.52 15.92 23.52 12.267z"
        fill="#4285F4"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.173 14.373a7.387 7.387 0 01-.4-2.373c0-.827.147-1.627.387-2.373L1.28 6.613A12.01 12.01 0 000 12c0 1.933.467 3.76 1.28 5.387l3.893-3.014z"
        fill="#FBBC05"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24c3.24 0 5.96-1.067 7.947-2.907L16.16 18.16c-1.013.707-2.373 1.2-4.16 1.2-3.173 0-5.867-2.093-6.827-4.987l-3.88 3.014C3.267 21.307 7.307 24 12 24z"
        fill="#34A853"
      ></path>
    </svg>
  );
};

WebGoogleComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const WebGoogle = React.memo(WebGoogleComponent);

export default WebGoogle;
