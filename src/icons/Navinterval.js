import React from 'react';

const NavintervalComponent = props => {
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
        d="M16.98 4.033a.75.75 0 000 1.5h2.06l-.166.166a.75.75 0 001.06 1.06l.297-.295v2.319a.75.75 0 001.5 0v-4a.75.75 0 00-.75-.75h-4z"
        fill="#00DDD3"
      ></path>
      <path
        d="M18.693 7.905a.75.75 0 10-1.06-1.06l-.68.679a.75.75 0 101.061 1.06l.68-.679z"
        fill="#00DDD3"
      ></path>
      <path
        d="M10.908 8.534a1.25 1.25 0 00-.773 0 1.26 1.26 0 00-.427.249c-.088.074-.182.168-.268.254L4.99 13.486a.75.75 0 001.06 1.06l4.47-4.47 1.919 1.919c.086.086.18.18.268.255.099.084.239.186.427.248.251.081.522.081.773 0a1.26 1.26 0 00.428-.248c.087-.075.181-.169.267-.255l.015-.014a.75.75 0 00-1.061-1.061l-.035.035-1.919-1.918a4.723 4.723 0 00-.267-.254 1.259 1.259 0 00-.428-.249z"
        fill="#00DDD3"
      ></path>
      <path
        d="M16.655 9.943a.75.75 0 10-1.06-1.06l-.68.678a.75.75 0 101.061 1.061l.68-.68z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.606 4.911a.75.75 0 01.75.75v9.2c0 .853 0 1.447.039 1.91.037.453.106.714.206.912.216.423.56.767.984.983.197.1.458.17.912.207.463.038 1.057.038 1.91.038h11.2a.75.75 0 010 1.5H7.373c-.813 0-1.468 0-2-.043-.546-.045-1.026-.14-1.47-.365a3.75 3.75 0 01-1.64-1.64c-.225-.443-.32-.924-.364-1.47-.044-.531-.044-1.187-.044-2V5.661a.75.75 0 01.75-.75z"
      ></path>
    </svg>
  );
};

NavintervalComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Navinterval = React.memo(NavintervalComponent);

export default Navinterval;
