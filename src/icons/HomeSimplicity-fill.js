import React from 'react';

const HomeSimplicityFillComponent = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
        fill="#78808D"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.388 6.168a1 1 0 01.277 1.387L11.37 11H14.5a1 1 0 01.832 1.555l-3.333 5a1 1 0 11-1.664-1.11L12.63 13H9.5a1 1 0 01-.832-1.555l3.333-5a1 1 0 011.387-.277z"
        fill="#00D5C8"
      ></path>
    </svg>
  );
};

HomeSimplicityFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeSimplicityFill = React.memo(HomeSimplicityFillComponent);

export default HomeSimplicityFill;
