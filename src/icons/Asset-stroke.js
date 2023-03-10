import React from 'react';
import PropTypes from 'prop-types';

const Asset = props => {
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
        d="M17.5 14h.01M4 5v14a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 01-2-2zm0 0a2 2 0 012-2h12m0 11a.5.5 0 11-1 0 .5.5 0 011 0z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

Asset.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Asset.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default Asset;
