import React from 'react';

const DeleteComponent = props => {
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
        d="M11 9.5l5.5 5.5m0-5.5L11 15m-8.133-1.817l3.434 4.683A4 4 0 009.527 19.5H18a4 4 0 004-4v-7a4 4 0 00-4-4H9.527a4 4 0 00-3.226 1.635l-3.434 4.682a2 2 0 000 2.366z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

DeleteComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Delete = React.memo(DeleteComponent);

export default Delete;
