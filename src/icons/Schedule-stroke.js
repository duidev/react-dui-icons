import React from 'react';

const ScheduleComponent = props => {
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
      <rect
        x="3"
        y="4.5"
        width="18"
        height="16.5"
        rx="4"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></rect>
      <path
        d="M7.518 3.25v2.53"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M16.503 3.25v2.53"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7.958 10.797h8.158"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M7.958 14.733h4.08"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

ScheduleComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Schedule = React.memo(ScheduleComponent);

export default Schedule;
