import React from 'react';

const AtmComponent = props => {
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
        d="M7 12.9H5a3 3 0 01-3-3V6.5a3 3 0 013-3h14a3 3 0 013 3v3.4a3 3 0 01-3 3h-2"
        strokeWidth="1.5"
      ></path>
      <path
        d="M6.8 8.077v11.14a2 2 0 002 2h6.4a2 2 0 002-2V8.076"
        strokeWidth="1.5"
      ></path>
      <path
        d="M13.46 12.343a1.674 1.674 0 00-.764-.553 1.912 1.912 0 00-.982-.085c-.33.058-.633.2-.87.41-.239.21-.4.478-.466.77-.066.29-.032.592.096.867.13.274.347.508.627.673.28.165.6.192.945.253.651.118 1.204.333 1.48.922.129.274.162.576.097.867a1.457 1.457 0 01-.466.77 1.78 1.78 0 01-.87.41c-.33.058-.672.028-.983-.085a1.674 1.674 0 01-.763-.553"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12.145 10.757v.906"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path
        d="M12.145 18.176v.36"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
      <path d="M5.355 8.2h13.29" strokeWidth="1.5" strokeLinecap="round"></path>
    </svg>
  );
};

AtmComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Atm = React.memo(AtmComponent);

export default Atm;
