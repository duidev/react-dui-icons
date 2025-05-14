import React from 'react';

const HomeWealthComponent = props => {
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
        d="M16.5 12.75v2.334M12 9v6.084M7.5 12.25v2.834M2 7.5a4 4 0 014-4h12a4 4 0 014 4v9a4 4 0 01-4 4H6a4 4 0 01-4-4v-9z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

HomeWealthComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeWealth = React.memo(HomeWealthComponent);

export default HomeWealth;
