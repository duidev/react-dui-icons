import React from 'react';

const HomeDftComponent = props => {
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
        d="M7.487 6l.483-1.932A.055.055 0 007.917 4a4.93 4.93 0 00-4.93 4.93V9m13.5 9l-.483 1.932a.055.055 0 00.053.068 4.93 4.93 0 004.93-4.93V15m-10 1a4 4 0 11-8 0 4 4 0 018 0zm10-9a4 4 0 11-8 0 4 4 0 018 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

HomeDftComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeDft = React.memo(HomeDftComponent);

export default HomeDft;
