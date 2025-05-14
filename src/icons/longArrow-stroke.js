import React from 'react';

const LongArrowComponent = props => {
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
        d="M20.149 12.042H3.753m10.06 6.713l6.14-6.053a.983.983 0 000-1.404l-6.14-6.053"
        strokeWidth="1.501"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

LongArrowComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const LongArrow = React.memo(LongArrowComponent);

export default LongArrow;
