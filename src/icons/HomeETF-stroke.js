import React from 'react';

const HomeEtfComponent = props => {
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
        d="M7.991 12.5l2.437-2.437a.1.1 0 01.133-.007l2.36 1.888a.1.1 0 00.134-.007L15.82 9.17a.1.1 0 00-.07-.17H13.99m-2 11.2v-2.7m-4 2.899h8m-9-3.4h10a4 4 0 004-4V7.5a4 4 0 00-4-4h-10a4 4 0 00-4 4V13a4 4 0 004 4z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

HomeEtfComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomeEtf = React.memo(HomeEtfComponent);

export default HomeEtf;
