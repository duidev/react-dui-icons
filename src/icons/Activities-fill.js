import React from 'react';

const ActivitiesFillComponent = props => {
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
        d="M3.084 5.717a2.693 2.693 0 012.692-2.693h2.961c.408 0 .803.139 1.122.393l1.014.812c.478.382 1.071.59 1.683.59h4.89c1.795 0 2.692 1.795 2.692 3.59H8.051c-.812 0-1.523.546-1.734 1.33l-2.72 10.126a2.68 2.68 0 01-.513-1.582V5.717zm18.102 4.488H9.816c-.798 0-1.5.527-1.724 1.293l-2.43 8.33a.898.898 0 00.863 1.148h11.37c.797 0 1.5-.526 1.723-1.292l2.43-8.33a.898.898 0 00-.862-1.15z"
      ></path>
    </svg>
  );
};

ActivitiesFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const ActivitiesFill = React.memo(ActivitiesFillComponent);

export default ActivitiesFill;
