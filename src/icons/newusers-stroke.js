import React from 'react';

const NewusersComponent = props => {
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
        d="M7.953 3.5a2.901 2.901 0 110 5.802 2.901 2.901 0 010-5.802zm8.064 0a2.901 2.901 0 110 5.802 2.901 2.901 0 010-5.802z"
        strokeWidth="1.5"
      ></path>
      <path
        d="M8.995 21.25c0-5.247 2.188-9.5 7.003-9.5 4.246 0 6.692 3.75 6.975 8.55.024.408.036.612-.084.762a.522.522 0 01-.056.06c-.143.128-.356.128-.783.128h-9.554m-3.492 0H1.95c-.426 0-.64 0-.782-.128a.518.518 0 01-.055-.058c-.12-.15-.11-.354-.088-.764.253-4.8 2.458-8.55 6.978-8.55.298 0 .587.018.866.054"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

NewusersComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Newusers = React.memo(NewusersComponent);

export default Newusers;
