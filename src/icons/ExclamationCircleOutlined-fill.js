import React from 'react';

const ExclamationCircleOutlinedFillComponent = props => {
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
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.857 6.214c0-.117.096-.214.214-.214h1.286c.118 0 .214.097.214.214V13.5a.215.215 0 01-.214.214h-1.286a.215.215 0 01-.214-.214V6.214zM12 18a1.286 1.286 0 010-2.571A1.286 1.286 0 0112 18z"
        fill="#FF801A"
      ></path>
    </svg>
  );
};

ExclamationCircleOutlinedFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ExclamationCircleOutlinedFill = React.memo(
  ExclamationCircleOutlinedFillComponent
);

export default ExclamationCircleOutlinedFill;
