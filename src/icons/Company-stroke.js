import React from 'react';

const CompanyComponent = props => {
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
        d="M13 11h4.8c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C21 12.52 21 13.08 21 14.2V21M3 21V6.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C4.52 3 5.08 3 6.2 3h3.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C13 4.52 13 5.08 13 6.2V21M2 21h20M9.5 7h-3m3 4h-3m3 4h-3"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

CompanyComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Company = React.memo(CompanyComponent);

export default Company;
