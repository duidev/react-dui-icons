import React from 'react';

const HomeoptionComponent = props => {
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
        d="M10.884 21H5.961C4.602 21 3.5 19.937 3.5 18.627V5.373C3.5 4.063 4.602 3 5.962 3h11.076c1.36 0 2.462 1.063 2.462 2.374v5.538m-12-1.978h8m-8 3.956h4m7.569 8.031v-5.33l1.431 1.416m-4.379-1.416v5.33l-1.431-1.415"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

HomeoptionComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Homeoption = React.memo(HomeoptionComponent);

export default Homeoption;
