import React from 'react';

const Key2Component = props => {
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
        d="M12.503 10l6.5-6.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M8.503 8.75a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zM20.06 7.08a.75.75 0 01.046 1.005l-.052.056-2.133 2.11a.75.75 0 01-1.003.046l-.057-.052-2.292-2.318 3.2-3.164 2.291 2.318z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

Key2Component.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Key2 = React.memo(Key2Component);

export default Key2;
