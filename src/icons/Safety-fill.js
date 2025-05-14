import React from 'react';

const SafetyFillComponent = props => {
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
      <path d="M19.157 3.382l-6.018-2.255c-.624-.23-1.642-.23-2.266 0L4.855 3.382c-1.16.437-2.101 1.794-2.101 3.03v8.864c0 .887.58 2.057 1.291 2.583l6.019 4.497c1.061.799 2.801.799 3.862 0l6.019-4.497c.711-.537 1.291-1.696 1.291-2.583V6.413c.011-1.237-.93-2.594-2.079-3.031zm-3.348 6.127l-4.706 4.706a.812.812 0 01-.58.24.812.812 0 01-.58-.24l-1.75-1.773a.826.826 0 010-1.16.825.825 0 011.16 0l1.181 1.182 4.126-4.125a.826.826 0 011.16 0 .829.829 0 01-.011 1.17z"></path>
    </svg>
  );
};

SafetyFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const SafetyFill = React.memo(SafetyFillComponent);

export default SafetyFill;
