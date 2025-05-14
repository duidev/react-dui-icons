import React from 'react';

const HomefaceWinkFillComponent = props => {
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
        d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
        fill="#78808D"
      ></path>
      <path d="M8 13.75s1.5 2 4 2 4-2 4-2" fill="#fff"></path>
      <path d="M15.5 8.75a.5.5 0 11-1 0 .5.5 0 011 0z" fill="#fff"></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 8.75a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-6.5 0a1 1 0 011-1h2a1 1 0 010 2H8a1 1 0 01-1-1zm1.797 4.396A1 1 0 007.2 14.35l.8-.6-.8.6.001.002.001.001.003.004.007.009.021.027.07.086a6.949 6.949 0 001.171 1.08c.798.58 2 1.191 3.526 1.191 1.526 0 2.728-.61 3.526-1.191a6.951 6.951 0 001.17-1.08c.03-.035.053-.064.07-.086l.022-.027.007-.01.003-.003.001-.002-.799-.6.8.6a1 1 0 00-1.597-1.205l-.004.006a3.601 3.601 0 01-.194.219 4.951 4.951 0 01-.656.57c-.577.42-1.374.81-2.349.81-.974 0-1.772-.39-2.35-.81a4.952 4.952 0 01-.815-.748 1.932 1.932 0 01-.033-.041l-.005-.006z"
        fill="#00D5C8"
      ></path>
    </svg>
  );
};

HomefaceWinkFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HomefaceWinkFill = React.memo(HomefaceWinkFillComponent);

export default HomefaceWinkFill;
