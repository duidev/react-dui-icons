import React from 'react';

const DocumentComponent = props => {
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
        d="M19.513 7.86H15.72a1.5 1.5 0 01-1.5-1.5V3.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8.018 11.235h4.006m-4.006 3.97h7.978"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M8.6 21h6.8c1.785 0 2.678 0 3.36-.294.6-.26 1.087-.672 1.393-1.18.347-.578.347-1.334.347-2.846V8.4L14.125 3H8.6c-1.785 0-2.678 0-3.36.294-.6.26-1.087.672-1.393 1.18C3.5 5.052 3.5 5.808 3.5 7.32v9.36c0 1.512 0 2.268.347 2.846.306.508.794.92 1.393 1.18C5.922 21 6.815 21 8.6 21z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

DocumentComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Document = React.memo(DocumentComponent);

export default Document;
