import React from 'react';

const BidsFillComponent = props => {
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
        d="M10.753 1.904c.392-1.204 2.1-1.204 2.495 0h-.001l1.992 6.115h6.447c1.27 0 1.799 1.622.77 2.367L20.23 12H13a1 1 0 00-1 1v4.964l-5.215 3.781c-1.03.745-2.411-.257-2.02-1.463l1.993-6.115-5.214-3.78c-1.03-.745-.5-2.367.77-2.367H8.76l1.993-6.116zm3.393 12.243A.5.5 0 0014 14.5v2a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-8a.5.5 0 00-.354.147zm0 5A.5.5 0 0014 19.5v2a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-8a.5.5 0 00-.354.147z"
      ></path>
    </svg>
  );
};

BidsFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const BidsFill = React.memo(BidsFillComponent);

export default BidsFill;
