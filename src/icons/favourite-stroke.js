import React from 'react';

const FavouriteComponent = props => {
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
      <g clipPath="url(#clip0_1207_72)">
        <path
          d="M11.784 1.861a.25.25 0 01.39-.054l.042.054 2.794 4.796c.216.372.56.648.965.781l.176.048 5.425 1.175a.25.25 0 01.172.355l-.039.056-3.697 4.139c-.287.32-.444.733-.446 1.16l.01.183.559 5.521a.251.251 0 01-.284.274l-.066-.02-5.079-2.237a1.751 1.751 0 00-1.24-.066l-.172.066-5.08 2.237a.25.25 0 01-.346-.184l-.003-.07.56-5.521a1.75 1.75 0 00-.321-1.2l-.116-.143-3.697-4.139a.25.25 0 01.068-.387l.065-.024 5.425-1.175a1.75 1.75 0 001.04-.675l.101-.154 2.794-4.796z"
          strokeWidth="1.5"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1207_72">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FavouriteComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Favourite = React.memo(FavouriteComponent);

export default Favourite;
