import React from 'react';

const ActivitiesComponent = props => {
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
        d="M9.752 2.578a3.466 3.466 0 014.246-.194l.25.194a4.965 4.965 0 002.63 1.15l.195.02a3.466 3.466 0 013.14 2.865l.039.314A4.965 4.965 0 0021.298 9.6l.124.15a3.466 3.466 0 01.194 4.247l-.194.25a4.965 4.965 0 00-1.15 2.63l-.02.195a3.466 3.466 0 01-2.865 3.14l-.314.039a4.965 4.965 0 00-2.674 1.046l-.151.124a3.466 3.466 0 01-4.246.194l-.25-.194a4.965 4.965 0 00-2.63-1.15l-.195-.02a3.466 3.466 0 01-3.14-2.865l-.039-.314A4.965 4.965 0 002.702 14.4l-.124-.151a3.466 3.466 0 01-.194-4.246l.194-.25a4.965 4.965 0 001.15-2.63l.02-.195a3.466 3.466 0 012.865-3.14l.314-.039A4.965 4.965 0 009.6 2.702l.15-.124z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path d="M15 9l-6 6" strokeWidth="1.5" strokeLinecap="round"></path>
      <circle cx="9" cy="9.2" r="1" fill="#272727"></circle>
      <circle cx="15" cy="14.8" r="1" fill="#272727"></circle>
    </svg>
  );
};

ActivitiesComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Activities = React.memo(ActivitiesComponent);

export default Activities;
