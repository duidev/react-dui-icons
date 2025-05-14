import React from 'react';

const EyeComponent = props => {
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
        d="M1.855 13.234c-.146-.395-.22-.593-.237-1.129a5.804 5.804 0 010-.21c.017-.536.09-.734.237-1.129C3.2 7.126 7.012 4.5 11.503 4.5c4.49 0 8.302 2.625 9.648 6.266.146.395.219.593.236 1.129v.21c-.017.536-.09.734-.236 1.129-1.346 3.64-5.157 6.266-9.648 6.266S3.2 16.875 1.855 13.234z"
        strokeWidth="1.501"
      ></path>
      <circle cx="11.503" cy="12" r="3" strokeWidth="1.501"></circle>
    </svg>
  );
};

EyeComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Eye = React.memo(EyeComponent);

export default Eye;
