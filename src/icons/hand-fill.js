import React from 'react';

const HandFillComponent = props => {
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
        d="M18.032 9.626h-.06c-.329 0-.653.08-.944.235a2.043 2.043 0 00-1.843-1.164h-.06c-.298 0-.592.066-.862.193a2.067 2.067 0 00-1.926-1.355h-.06c-.248 0-.497.047-.73.137V6.145c0-1.156-.923-2.096-2.057-2.096h-.057c-1.135 0-2.058.94-2.058 2.096v6.657a.143.143 0 01-.039.099.132.132 0 01-.188.004l-.737-.724a1.946 1.946 0 00-1.489-.562c-.53.031-1.015.27-1.367.675l-.18.206a2.096 2.096 0 00-.123 2.588l3.864 5.41a4.975 4.975 0 004.035 2.093h3.948c2.752 0 4.99-2.282 4.99-5.088v-5.78c0-1.156-.922-2.097-2.057-2.097z"
        fill="#222727"
      ></path>
      <path
        d="M12.845 6.328a.611.611 0 01-.607-.615c0-1.597-1.273-2.896-2.84-2.896-1.565 0-2.84 1.299-2.84 2.896a.618.618 0 01-.301.532.6.6 0 01-.608 0 .618.618 0 01-.302-.532c0-2.275 1.817-4.126 4.052-4.126 2.234 0 4.052 1.851 4.052 4.126a.611.611 0 01-.606.615z"
        fill="#222727"
      ></path>
    </svg>
  );
};

HandFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const HandFill = React.memo(HandFillComponent);

export default HandFill;
