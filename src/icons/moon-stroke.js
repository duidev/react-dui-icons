import React from 'react';

const MoonComponent = props => {
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
        d="M11.855 2.753c-.31.9-.479 1.865-.479 2.866 0 4.924 4.057 8.893 9.034 8.893.155 0 .288.073.358.156a.193.193 0 01.046.086.082.082 0 010 .025l-.012.044c-1.395 3.167-4.739 5.427-8.676 5.427-5.224 0-9.376-3.962-9.376-8.75 0-4.755 3.964-8.675 9.105-8.747z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

MoonComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Moon = React.memo(MoonComponent);

export default Moon;
