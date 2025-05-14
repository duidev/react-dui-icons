import React from 'react';

const PortfolioDarkComponent = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="dui-icon"
      fill="currentcolor"
      color={color}
      {...otherProps}
    >
      <path
        d="M1.538 12.9c.457 5.377 4.966 9.6 10.462 9.6 5.496 0 10.006-4.223 10.462-9.6H16.41a4.501 4.501 0 01-8.82 0H1.538z"
        fill="#F9F9F9"
      ></path>
      <path
        d="M1.517 11.4c.297-5.271 4.482-9.503 9.733-9.874v6.036A4.503 4.503 0 007.54 11.4H1.517z"
        fill="#F9F9F9"
        fillOpacity=".35"
      ></path>
      <path
        d="M16.46 11.4h6.023c-.297-5.271-4.482-9.503-9.733-9.874v6.036a4.503 4.503 0 013.71 3.838z"
        fill="#F9F9F9"
        fillOpacity=".8"
      ></path>
    </svg>
  );
};

PortfolioDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const PortfolioDark = React.memo(PortfolioDarkComponent);

export default PortfolioDark;
