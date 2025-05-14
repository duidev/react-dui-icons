import React from 'react';

const UserFillComponent = props => {
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
        d="M7.39 16.54a8 8 0 119.221 0l2.083 4.76a.5.5 0 01-.459.701H5.765a.5.5 0 01-.459-.7L7.39 16.54zm.729-5.568a4.002 4.002 0 007.763 0l-1.941-.486a2 2 0 01-3.882 0l-1.94.486z"
        fill="#000"
      ></path>
    </svg>
  );
};

UserFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const UserFill = React.memo(UserFillComponent);

export default UserFill;
