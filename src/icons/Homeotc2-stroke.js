import React from 'react';

const Homeotc2Component = props => {
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
        d="M7.25 19l.483 1.932A.055.055 0 017.68 21a4.93 4.93 0 01-4.93-4.93V16m13.5-9l-.438-1.751a.193.193 0 01.194-.242A5 5 0 0120.75 10M8.278 5.036a2.036 2.036 0 11-4.072 0 2.036 2.036 0 014.072 0zm-6.015 5.827c.383-2.01 2.022-3.52 3.987-3.52 1.965 0 3.604 1.51 3.987 3.52.093.491-.32.9-.82.9H3.083c-.5 0-.914-.409-.82-.9zm17.515 3.173a2.035 2.035 0 11-4.071 0 2.035 2.035 0 014.07 0zm-6.015 5.827c.383-2.01 2.023-3.52 3.987-3.52 1.965 0 3.604 1.51 3.987 3.52.093.491-.32.9-.82.9h-6.333c-.5 0-.914-.409-.82-.9z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Homeotc2Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Homeotc2 = React.memo(Homeotc2Component);

export default Homeotc2;
