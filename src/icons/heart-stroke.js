import React from 'react';

const HeartComponent = props => {
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
        d="M12.519 4.87c2.363-2.298 6.49-2.25 8.638.774l.201.301a5.844 5.844 0 01-.982 7.392l-.204.179-7.547 6.316a1.25 1.25 0 01-1.53.058l-.09-.072-7.24-6.267c-2.107-1.824-2.623-4.898-1.257-7.314l.138-.231c2.077-3.314 6.373-3.464 8.834-1.131l.522.495.517-.5z"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

HeartComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Heart = React.memo(HeartComponent);

export default Heart;
