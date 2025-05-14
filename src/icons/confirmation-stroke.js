import React from 'react';

const ConfirmationComponent = props => {
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
        d="M10.2 17.092V19.2a1.8 1.8 0 003.6 0v-2.108M12 3v.9M3.9 12H3m3.15-5.85l-.54-.54m12.24.54l.54-.54M21 12h-.9m-2.7 0a5.4 5.4 0 11-10.8 0 5.4 5.4 0 0110.8 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

ConfirmationComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Confirmation = React.memo(ConfirmationComponent);

export default Confirmation;
