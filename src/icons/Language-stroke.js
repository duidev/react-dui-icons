import React from 'react';

const LanguageComponent = props => {
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
        d="M11.996 22c5.522 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M16.773 3.328c.6 2.73-2.665 3.073-3.764 4.029-1.201 1.044.693 3.621-1.038 4.587-1.731.967-3.583-1.97-4.799-1.308-1.215.663-.466 3.065-1.334 3.857-.468.426-2.357-.157-3.593-.661"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M15 21.404c-.584-.846-.718-1.738-.506-2.403.394-1.236 1.043-1.163 1.326-1.927.283-.764-.517-1.852 1.258-2.782 1.016-.533 3.015-.054 3.922 1.708"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

LanguageComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Language = React.memo(LanguageComponent);

export default Language;
