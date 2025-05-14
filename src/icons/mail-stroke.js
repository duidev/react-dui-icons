import React from 'react';

const MailComponent = props => {
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
        d="M17.728 9.178L12.85 11.79a1.8 1.8 0 01-1.7 0L6.272 9.178M3 7.5a3.6 3.6 0 013.6-3.6h10.8A3.6 3.6 0 0121 7.5v9a3.6 3.6 0 01-3.6 3.6H6.6A3.6 3.6 0 013 16.5v-9z"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

MailComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Mail = React.memo(MailComponent);

export default Mail;
