import React from 'react';

const HomeblogComponent = props => {
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
        d="M11.566 8.07h4.985m-4.985 4.02h4.985m-9.5 8.41H17.55a3 3 0 003-3v-11a3 3 0 00-3-3h-7.5a3 3 0 00-3 3v14zm-.001 0v-6.609a1.8 1.8 0 00-3.6 0v5.61a1 1 0 001 1h2.6z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

HomeblogComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Homeblog = React.memo(HomeblogComponent);

export default Homeblog;
