import React from 'react';

const IphoneWhiteComponent = props => {
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
      <g clipPath="url(#clip0_516_42)">
        <path
          d="M16.472 0c-1.281.084-2.714.88-3.589 1.951-.794.968-1.517 2.4-1.26 3.806 1.4.037 2.848-.768 3.686-1.855.782-1.011 1.38-2.44 1.163-3.902zm-8.63 5.56c-1.83 0-3.806 1.205-5.041 3.122-1.743 2.69-1.458 7.676 1.359 12 1.011 1.542 2.407 3.3 4.169 3.318 1.56.015 1.945-.965 4.07-.977 2.125-.013 2.504.992 4.073.977 1.756-.019 3.258-1.873 4.263-3.415a17.487 17.487 0 001.55-2.928c-4.079-1.552-4.808-7.436-.775-9.659-1.228-1.542-2.925-2.435-4.554-2.435-2.156 0-3.059 1.07-4.557 1.07-1.545 0-2.69-1.073-4.557-1.073z"
          fill="#fff"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_516_42">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

IphoneWhiteComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const IphoneWhite = React.memo(IphoneWhiteComponent);

export default IphoneWhite;
