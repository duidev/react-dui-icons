import React from 'react';

const HomeMiningComponent = props => {
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
        d="M8 12.572h8M12 21v-7.74M8.5 19h-2a5.5 5.5 0 110-11v0a.541.541 0 00.525-.5 5 5 0 019.95 0c.028.276.249.5.525.5v0a5.5 5.5 0 010 11h-2"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

HomeMiningComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeMining = React.memo(HomeMiningComponent);

export default HomeMining;
