import React from 'react';

const Settings2Component = props => {
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
      <path
        d="M21.484 10.875c.377.653.4 1.448.07 2.118l-.07.132-3.767 6.525a2.252 2.252 0 01-1.95 1.126H8.233a2.252 2.252 0 01-1.87-.998l-.079-.128-3.767-6.525a2.251 2.251 0 01-.07-2.118l.07-.132L6.283 4.35a2.252 2.252 0 011.95-1.126h7.535c.753 0 1.454.377 1.87.998l.079.128 3.767 6.525z"
        strokeWidth="1.501"
      ></path>
      <path
        d="M12 9.25a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Settings2Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Settings2 = React.memo(Settings2Component);

export default Settings2;
