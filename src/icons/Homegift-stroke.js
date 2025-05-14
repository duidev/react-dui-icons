import React from 'react';

const HomegiftComponent = props => {
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
        d="M11.996 7.4v14m-.054-15.486l-2.734-2.62c-1.522-1.458-4.2-.465-4.2 1.558C5.009 6.094 6.102 7.1 7.45 7.1h4.493V5.914zm.5 0l2.733-2.62c1.523-1.458 4.2-.465 4.2 1.558 0 1.242-1.093 2.248-2.44 2.248h-4.493V5.914zm-8.548 6.362H20.03V19.4a2 2 0 01-2 2H5.894a2 2 0 01-2-2v-7.124zm.69 0h14.573a2.588 2.588 0 100-5.176H4.583a2.588 2.588 0 100 5.176z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

HomegiftComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Homegift = React.memo(HomegiftComponent);

export default Homegift;
