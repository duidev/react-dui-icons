import React from 'react';

const Refresh2Component = props => {
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
        d="M2.996 9.647C3.826 5.573 7.532 2.5 11.979 2.5c4.328 0 7.954 2.91 8.911 6.82.028.116.193.131.238.02l.868-2.123m-1 7.136c-.83 4.075-4.537 7.147-8.984 7.147-4.328 0-7.954-2.91-8.91-6.82-.03-.116-.194-.13-.239-.02l-.867 2.123"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

Refresh2Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Refresh2 = React.memo(Refresh2Component);

export default Refresh2;
