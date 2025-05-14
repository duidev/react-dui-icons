import React from 'react';

const CheckboxFillComponent = props => {
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
      <rect width="24" height="24" rx="3"></rect>
      <path
        d="M9.857 15.215l9.285-9.286 1.43 1.428L9.857 18.071 3.43 11.643l1.428-1.428 5 5z"
        fill="#fff"
      ></path>
    </svg>
  );
};

CheckboxFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const CheckboxFill = React.memo(CheckboxFillComponent);

export default CheckboxFill;
