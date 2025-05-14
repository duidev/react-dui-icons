import React from 'react';

const EyeOffComponent = props => {
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
        d="M3.36 6.75a8.958 8.958 0 002.26 3.75 9.064 9.064 0 006.387 2.628 9.064 9.064 0 006.387-2.628 8.959 8.959 0 002.26-3.75m-8.647 10.692v-3.751m-8.12.777l2.652-2.653m13.56 2.653l-2.652-2.653"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

EyeOffComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const EyeOff = React.memo(EyeOffComponent);

export default EyeOff;
