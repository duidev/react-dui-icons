import React from 'react';

const SubaccountComponent = props => {
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
        d="M12.664 9.736a7.983 7.983 0 003.719 4.847m-5.97-4.785a7.983 7.983 0 01-3.799 4.785m8.074-8.04a3.193 3.193 0 11-6.387 0 3.193 3.193 0 016.387 0zm6.884 12.51a3.193 3.193 0 11-5.53-3.193 3.193 3.193 0 015.53 3.194zm-13.613 0a3.193 3.193 0 11-5.53-3.193 3.193 3.193 0 015.53 3.193z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

SubaccountComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Subaccount = React.memo(SubaccountComponent);

export default Subaccount;
