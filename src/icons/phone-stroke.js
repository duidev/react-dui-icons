import React from 'react';

const PhoneComponent = props => {
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
        d="M9.167 17.195h5.666M3.5 7.939c0-2.397 0-3.595.679-4.39.096-.113.201-.218.314-.314.795-.68 1.993-.68 4.39-.68h6.234c2.396 0 3.595 0 4.39.68.113.096.218.201.314.314.679.795.679 1.993.679 4.39v8.122c0 2.397 0 3.596-.679 4.39a2.828 2.828 0 01-.314.315c-.795.679-1.994.679-4.39.679H8.883c-2.397 0-3.595 0-4.39-.68a2.83 2.83 0 01-.314-.314c-.679-.794-.679-1.993-.679-4.39V7.94z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

PhoneComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Phone = React.memo(PhoneComponent);

export default Phone;
