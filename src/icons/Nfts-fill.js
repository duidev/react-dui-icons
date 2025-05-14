import React from 'react';

const NftsFillComponent = props => {
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
      <path d="M.83 7.66c-.239-.768.675-1.37 1.285-.847l1.855 1.59a3 3 0 004.683-1.038l2.438-5.362a1 1 0 011.82 0l2.438 5.362a3 3 0 004.683 1.037l1.854-1.589c.61-.523 1.524.08 1.284.846l-3.73 11.938A2 2 0 0117.529 21H6.47a2 2 0 01-1.909-1.404L.831 7.66H.83z"></path>
    </svg>
  );
};

NftsFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NftsFill = React.memo(NftsFillComponent);

export default NftsFill;
