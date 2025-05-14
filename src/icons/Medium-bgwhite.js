import React from 'react';

const MediumBgwhiteComponent = props => {
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
      <rect width="24" height="24" rx="12" fill="#fff"></rect>
      <path d="M12.863 12.322c0 2.055-1.694 3.723-3.792 3.723S5.28 14.377 5.28 12.322c0-2.055 1.694-3.723 3.792-3.723s3.792 1.668 3.792 3.723zm4.154 0c0 1.932-.85 3.502-1.896 3.502-1.045 0-1.896-1.57-1.896-3.502 0-1.931.851-3.501 1.896-3.501s1.896 1.561 1.896 3.501zm1.702 0c0 1.734-.295 3.14-.665 3.14-.371 0-.666-1.406-.666-3.14 0-1.734.295-3.14.666-3.14.37 0 .665 1.406.665 3.14z"></path>
    </svg>
  );
};

MediumBgwhiteComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const MediumBgwhite = React.memo(MediumBgwhiteComponent);

export default MediumBgwhite;
