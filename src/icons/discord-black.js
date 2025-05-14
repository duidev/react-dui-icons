import React from 'react';

const DiscordBlackComponent = props => {
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
      <rect width="24" height="24" rx="12" fill="#010101"></rect>
      <path
        d="M17.9 6.589A13.969 13.969 0 0014.394 5.5a10.1 10.1 0 00-.449.922 13.034 13.034 0 00-3.887 0 9.81 9.81 0 00-.454-.922c-1.232.21-2.41.582-3.51 1.092-2.22 3.313-2.822 6.544-2.52 9.73a14.088 14.088 0 004.3 2.177c.347-.471.656-.972.922-1.5a9.106 9.106 0 01-1.45-.697c.12-.089.24-.182.355-.277 2.797 1.292 5.836 1.292 8.6 0 .116.095.235.188.356.277-.46.274-.947.509-1.454.7.266.525.574 1.027.922 1.498a14.058 14.058 0 004.304-2.179c.353-3.692-.603-6.894-2.527-9.732zm-8.724 7.773c-.84 0-1.528-.774-1.528-1.717 0-.943.674-1.719 1.528-1.719s1.543.775 1.528 1.719c.002.943-.674 1.717-1.528 1.717zm5.648 0c-.84 0-1.528-.774-1.528-1.717 0-.943.674-1.719 1.528-1.719s1.543.775 1.528 1.719c0 .943-.674 1.717-1.528 1.717z"
        fill="#fff"
      ></path>
    </svg>
  );
};

DiscordBlackComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const DiscordBlack = React.memo(DiscordBlackComponent);

export default DiscordBlack;
