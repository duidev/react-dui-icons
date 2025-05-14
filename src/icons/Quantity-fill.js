import React from 'react';

const QuantityFillComponent = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.212 15.049l.254.14c.515.284.687.906.385 1.39a1.05 1.05 0 01-.385.362l-8.919 4.92a1.142 1.142 0 01-1.094 0l-8.919-4.92c-.515-.284-.687-.906-.385-1.39.093-.15.226-.275.385-.362l.254-.14 8.665 4.779c.32.177.715.186 1.043.026l.051-.026 8.665-4.78zm0-4.065l.254.14c.515.284.687.906.385 1.39a1.05 1.05 0 01-.385.363l-8.919 4.918a1.142 1.142 0 01-1.094 0l-8.919-4.919c-.515-.284-.687-.906-.385-1.39.093-.15.226-.275.385-.362l.254-.14 8.665 4.779c.32.177.715.186 1.043.027l.051-.027 8.665-4.78zM12.547 2.14l8.919 4.919c.515.284.687.907.385 1.39a1.05 1.05 0 01-.385.363l-8.919 4.919a1.142 1.142 0 01-1.094 0L2.534 8.81c-.515-.283-.687-.906-.385-1.39.093-.15.226-.274.385-.362l8.919-4.92a1.141 1.141 0 011.094 0z"
      ></path>
    </svg>
  );
};

QuantityFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const QuantityFill = React.memo(QuantityFillComponent);

export default QuantityFill;
