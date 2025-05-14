import React from 'react';

const FaceIdComponent = props => {
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
        d="M2.996 7v-.436c0-1.587 0-2.38.449-2.906.064-.075.133-.145.208-.208C4.18 3 4.973 3 6.56 3h.437m14 14v.436c0 1.587 0 2.38-.45 2.907a1.876 1.876 0 01-.208.208c-.526.45-1.32.45-2.906.45h-.436m-9.91 0H6.56c-1.586 0-2.38 0-2.906-.45a1.876 1.876 0 01-.208-.208c-.45-.527-.45-1.32-.45-2.907v-.527M16.996 3h1.15c1.269 0 1.904 0 2.325.36.06.05.115.106.166.166.36.421.36 1.056.36 2.325v1.15m-12.5 8.5s1 1.5 3.5 1.5 3.5-1.5 3.5-1.5M7.99 7.6v1.5m9-1.5v1.5m-4.495-1.6v2.918c0 .944-.605 1.782-1.5 2.081"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

FaceIdComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const FaceId = React.memo(FaceIdComponent);

export default FaceId;
