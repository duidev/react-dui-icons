import React from 'react';

const PutAwayComponent = props => {
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
        d="M1.856 4v16m20.288-8.01H6.307m0 0l5.516 5m-5.516-5l5.516-5.862"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

PutAwayComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const PutAway = React.memo(PutAwayComponent);

export default PutAway;
