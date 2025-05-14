import React from 'react';

const MailBlackComponent = props => {
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
      <rect width="24" height="24" rx="12" fill="#010101"></rect>
      <g clipPath="url(#clip0_1708_603)">
        <path
          d="M6.308 8.998l5.394-3.235a.583.583 0 01.6 0l5.39 3.235a.292.292 0 01.14.25v7.419a.583.583 0 01-.583.583H6.75a.583.583 0 01-.583-.583V9.249c0-.103.054-.198.142-.25zm9.393.81l-3.666 3.174-3.741-3.177-.756.89 4.504 3.823 4.422-3.827-.763-.882z"
          fill="#fff"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1708_603">
          <rect
            width="14"
            height="14"
            fill="#fff"
            transform="translate(5 5)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

MailBlackComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const MailBlack = React.memo(MailBlackComponent);

export default MailBlack;
