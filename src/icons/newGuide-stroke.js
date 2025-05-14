import React from 'react';

const NewGuideComponent = props => {
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
        d="M12 11.544v5.811M10.2 7.25s1.822 1.583 3.645-.003m-7.657-.245a6.002 6.002 0 0111.624 0m-6.47 3.71l-5.62-1.616c-1.483-.426-2.972.647-2.972 2.142v7.03c0 .848.616 1.579 1.474 1.751l7.025 1.408c.495.1 1.007.1 1.502 0l7.025-1.408c.858-.172 1.474-.903 1.474-1.75v-7.029c0-1.495-1.489-2.568-2.971-2.142l-5.62 1.614a2.39 2.39 0 01-1.318 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

NewGuideComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NewGuide = React.memo(NewGuideComponent);

export default NewGuide;
