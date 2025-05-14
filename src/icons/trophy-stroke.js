import React from 'react';

const TrophyComponent = props => {
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
        d="M6.675 3.75h10.65c.29 0 .468 0 .602.01.063.004.102.01.126.015l.022.005.004.001.001.001a.293.293 0 01.147.13c.002.01.009.04.013.097.01.117.01.276.01.547V10.5c0 3.124-2.745 5.75-6.25 5.75s-6.25-2.626-6.25-5.75V4.556c0-.271 0-.43.01-.547.008-.103.02-.115.012-.098a.276.276 0 01.095-.101l.053-.028h0l.005-.002.022-.005c.024-.005.064-.01.126-.015.134-.01.313-.01.602-.01z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.001 17v4m5 0h-10m15-16v5m-20-5v5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

TrophyComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Trophy = React.memo(TrophyComponent);

export default Trophy;
