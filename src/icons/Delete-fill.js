import React from 'react';

const DeleteFillComponent = props => {
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
        d="M12 24c6.627 0 12-5.372 12-12 0-6.627-5.373-12-12-12S0 5.373 0 12c0 6.628 5.373 12 12 12zM6.697 8.818a1.5 1.5 0 112.121-2.121L12 9.879l3.182-3.182a1.5 1.5 0 112.122 2.121L14.12 12l3.182 3.182a1.5 1.5 0 11-2.121 2.121L12 14.122l-3.182 3.181a1.5 1.5 0 11-2.121-2.121L9.879 12 6.697 8.818z"
        fill="#787B7B"
      ></path>
    </svg>
  );
};

DeleteFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const DeleteFill = React.memo(DeleteFillComponent);

export default DeleteFill;
