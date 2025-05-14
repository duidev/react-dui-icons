import React from 'react';

const ZapComponent = props => {
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
        d="M13.067 1.5L3.561 12.722c-.372.44-.558.66-.56.845a.522.522 0 00.197.416c.147.117.438.117 1.02.117h6.715v8.4l9.506-11.222c.372-.44.558-.66.56-.845a.522.522 0 00-.197-.416c-.147-.117-.438-.117-1.02-.117h-6.715V1.5z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

ZapComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Zap = React.memo(ZapComponent);

export default Zap;
