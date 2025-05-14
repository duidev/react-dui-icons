import React from 'react';

const NewIsolatedComponent = props => {
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
        d="M12 12.218l5-4.801M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zm-6 0a4 4 0 11-8 0 4 4 0 018 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

NewIsolatedComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NewIsolated = React.memo(NewIsolatedComponent);

export default NewIsolated;
