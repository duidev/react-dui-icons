import React from 'react';

const HomeCopyTradingComponent = props => {
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
        d="M6.187 3c-2.21 0-4 .995-4 2.222l.004 3.662C2.291 10.062 4.041 11 6.187 11c2.145 0 3.896-.938 3.995-2.116l.005-3.662c0-1.227-1.791-2.222-4-2.222zm0 0c2.209 0 4 .896 4 2 0 1.105-1.791 2-4 2-2.21 0-4-.895-4-2 0-1.104 1.79-2 4-2z"
        strokeWidth="1.5"
      ></path>
      <path
        d="M19.737 12.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M17.496 15.3c-2.172 0-3.984 1.67-4.407 3.892-.103.542.354.994.907.994h7c.552 0 1.01-.452.906-.994-.423-2.222-2.235-3.892-4.406-3.892z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M2.987 15v.07A4.93 4.93 0 007.917 20v0a.055.055 0 00.053-.068L7.487 18"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M20.987 9v0a5 5 0 00-5-5v0l.5 2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

HomeCopyTradingComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeCopyTrading = React.memo(HomeCopyTradingComponent);

export default HomeCopyTrading;
