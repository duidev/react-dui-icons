import React from 'react';

const NewTwitterBlackComponent = props => {
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
      <rect width="24" height="24" rx="12" fill="#000"></rect>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.223 6.445h3.444l2.601 3.467 2.844-3.467h2l-3.888 4.741L18 17.556h-3.445l-3.131-4.176L8 17.556H6l4.47-5.45-4.247-5.661zm5.782 6.227L15 16.667h1.222l-3.58-4.773-.638.778zm-.317-2.052l-.639.779-3.048-4.065h1.222l2.465 3.286z"
        fill="#fff"
      ></path>
    </svg>
  );
};

NewTwitterBlackComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NewTwitterBlack = React.memo(NewTwitterBlackComponent);

export default NewTwitterBlack;
