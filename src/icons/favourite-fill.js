import React from 'react';

const FavouriteFillComponent = props => {
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
      <g clipPath="url(#clip0_2015_236)">
        <path
          d="M11.136 1.484a1 1 0 011.728 0l2.794 4.796a1 1 0 00.652.474l5.425 1.175a1 1 0 01.534 1.643l-3.698 4.139a1 1 0 00-.25.767l.56 5.522a1 1 0 01-1.399 1.016l-5.079-2.238a1 1 0 00-.806 0l-5.08 2.238A1 1 0 015.12 20l.559-5.522a1 1 0 00-.25-.767L1.731 9.572a1 1 0 01.534-1.643L7.69 6.754a1 1 0 00.652-.474l2.794-4.796z"
          fill="#FFE05A"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2015_236">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

FavouriteFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const FavouriteFill = React.memo(FavouriteFillComponent);

export default FavouriteFill;
