import React from 'react';

const GooglePlayWhiteComponent = props => {
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
      <g clipPath="url(#clip0_1816_165)">
        <g
          clipPath="url(#clip1_1816_165)"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#fff"
        >
          <path d="M17.327 15.668l-2.497-2.485 2.497 2.485zm.879-.483l-.704-.754-2.498-2.485 2.502-2.527.773-.715a500.915 500.915 0 004.232 2.318c1.208.65.595 1.486 0 1.802-.126.063-1.166.635-2.715 1.487l-1.59.874zm-4.614-3.234l3.735-3.772-3.735 3.772z"></path>
          <path d="M1.699 23.938c.28.037.594-.037.966-.242l.959-.524c2.49-1.36 9.02-4.93 13.703-7.503L14.3 12.657 3.548 22.074 1.7 23.938zM13.226 12.32l.366-.369-.366.369z"></path>
          <path d="M1.7.017a1.366 1.366 0 00-.02.004l11.863 11.881L1.7.017zm11.892 11.934zm.746-.75l2.989-3.003S3.501.653 2.665.208A1.503 1.503 0 002.47.11l11.12 10.425.748.666z"></path>
          <path d="M1.68.02l11.912 11.931-.07.07-.635.64L.966 23.42c-.117-.24-.177-.545-.177-.894V1.433c0-.874.408-1.3.892-1.412zm-.075 23.923c.03.006.062.01.094.013l1.966-1.985-.117.103L1.7 23.938l-.094.005z"></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1816_165">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
        <clipPath id="clip1_1816_165">
          <rect
            width="22.423"
            height="24"
            fill="#fff"
            transform="translate(.789)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

GooglePlayWhiteComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const GooglePlayWhite = React.memo(GooglePlayWhiteComponent);

export default GooglePlayWhite;
