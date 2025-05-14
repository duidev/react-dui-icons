import React from 'react';

const HomeVolatilityComponent = props => {
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
        d="M14.191 2a9.432 9.432 0 011.517.408m1.716.822c.403.246.787.521 1.147.823m1.294 1.31c.278.343.533.705.762 1.084m.843 1.803c.142.412.257.836.341 1.271m.174 2.048c-.012.498-.061.986-.146 1.461M11.991 2c-5.523 0-10 4.477-10 10s4.477 10 10 10a10.003 10.003 0 009.403-6.588"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M12 7.4v.884"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 15.784v.716"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.813 11.875H10v-3.03c0-.19.155-.345.346-.345h2.466a1.687 1.687 0 110 3.375z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.813 15.25h-2.467a.346.346 0 01-.346-.347v-2.682c0-.191.155-.346.346-.346h2.466a1.687 1.687 0 110 3.375z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

HomeVolatilityComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeVolatility = React.memo(HomeVolatilityComponent);

export default HomeVolatility;
