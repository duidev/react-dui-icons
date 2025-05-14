import React from 'react';

const IntervalComponent = props => {
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
        d="M20.103 7.396l-.68.68M5.542 15.862l4.434-4.434c.198-.198.297-.297.412-.334a.5.5 0 01.308 0c.115.037.214.136.412.334l1.868 1.869c.198.198.297.297.412.334a.5.5 0 00.308 0c.115-.037.214-.136.412-.334m4.075-4.076l-.679.68m-2.038 2.037l.68-.68"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17 6.63h4v4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M3.039 7.064v9.2c0 1.68 0 2.52.327 3.162a3 3 0 001.31 1.31c.643.328 1.483.328 3.163.328h11.2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

IntervalComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Interval = React.memo(IntervalComponent);

export default Interval;
