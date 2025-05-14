import React from 'react';

const NewRedpacketComponent = props => {
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
        d="M3.5 6s2.757 1.449 8.27 1.5C17.743 7.556 20.5 6 20.5 6m-6.622 6.88l2.273-2.313m-.91 1.388l.91.925M6.5 22h11a4 4 0 004-4V6a4 4 0 00-4-4h-11a4 4 0 00-4 4v12a4 4 0 004 4zm7.5-6.5a3 3 0 11-6 0 3 3 0 016 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

NewRedpacketComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NewRedpacket = React.memo(NewRedpacketComponent);

export default NewRedpacket;
