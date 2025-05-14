import React from 'react';

const NewDeFiSectionComponent = props => {
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
        d="M8.308 9.214l3.332 3.454a.5.5 0 00.72 0l3.332-3.454m-1.547 11.321l7.338-7.505a3 3 0 00.519-3.477l-2.504-4.831a4 4 0 00-3.552-2.16H8.053a4 4 0 00-3.55 2.16l-2.505 4.83a3 3 0 00.519 3.478l7.338 7.505a3 3 0 004.29 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

NewDeFiSectionComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NewDeFiSection = React.memo(NewDeFiSectionComponent);

export default NewDeFiSection;
