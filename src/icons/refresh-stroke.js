import React from 'react';

const RefreshComponent = props => {
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
        d="M21.5 13.9c-.89 4.336-4.762 7.6-9.404 7.6-5.3 0-9.596-4.253-9.596-9.5s4.296-9.5 9.596-9.5a9.615 9.615 0 016.68 2.68c.064.061.173.016.173-.073v-2.08"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

RefreshComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Refresh = React.memo(RefreshComponent);

export default Refresh;
