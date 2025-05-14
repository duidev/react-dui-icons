import React from 'react';

const FunctionComponent = props => {
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
        d="M11.622 2.878a4 4 0 013.019 1.167l5.303 5.303a4 4 0 010 5.657l-4.95 4.95a4 4 0 01-5.656 0l-5.282-5.282a4 4 0 01-1.164-3.07l.34-5.645a3 3 0 012.852-2.816l5.538-.264z"
        strokeWidth="1.5"
      ></path>
      <path
        d="M13.32 10.532a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

FunctionComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Function = React.memo(FunctionComponent);

export default Function;
