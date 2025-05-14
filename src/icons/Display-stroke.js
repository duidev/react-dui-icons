import React from 'react';

const DisplayComponent = props => {
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
        d="M3.6 4.8h16.8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.6 12h6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.12 16.05a1.151 1.151 0 01-.062-.27 2.234 2.234 0 010-.36c.017-.135.032-.18.061-.269.597-1.822 2.467-3.15 4.681-3.15s4.084 1.328 4.681 3.15c.03.09.044.134.061.269.01.076.01.284 0 .36-.017.135-.031.18-.06.27-.598 1.82-2.468 3.15-4.682 3.15-2.214 0-4.084-1.33-4.68-3.15z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <circle cx="16.8" cy="15.6" r="1.2" fill="#222727"></circle>
      <path
        d="M3.6 20.4h6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

DisplayComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Display = React.memo(DisplayComponent);

export default Display;
