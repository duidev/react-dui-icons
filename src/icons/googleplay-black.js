import React from 'react';

const GoogleplayBlackComponent = props => {
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
      <g clipPath="url(#clip0_1746_153)">
        <g clipPath="url(#clip1_1746_153)" fill="#222727" strokeWidth=".5">
          <path d="M17.371 8.488a616.966 616.966 0 005.022 2.753v.001c.276.15.423.295.496.418a.432.432 0 01.055.331c-.054.232-.286.472-.55.613-.224.113-2.295 1.255-5.024 2.754l-3.425-3.409 3.426-3.46z"></path>
          <path d="M16.913 15.61a5784.724 5784.724 0 01-8.849 4.85l-5.52 3.017-.075.039 11.123-11.212 3.32 3.306z"></path>
          <path d="M2.34.328c.067.025.134.056.198.094l-.001.001.01.005C2.967.65 6.63 2.647 10.19 4.589c1.78.97 3.535 1.928 4.844 2.643l1.577.86.303.165-3.322 3.34L2.34.328z"></path>
          <path d="M13.239 11.952L1.614 23.687a.626.626 0 01-.38-.297c-.122-.2-.195-.494-.195-.864V1.433l.003-.144c.02-.32.105-.548.215-.704A.789.789 0 011.61.304l11.629 11.648z"></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1746_153">
          <rect width="24" height="24" fill="#fff"></rect>
        </clipPath>
        <clipPath id="clip1_1746_153">
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

GoogleplayBlackComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const GoogleplayBlack = React.memo(GoogleplayBlackComponent);

export default GoogleplayBlack;
