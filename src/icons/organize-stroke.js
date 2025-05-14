import React from 'react';

const OrganizeComponent = props => {
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
        d="M4.8 17.4v-.18c0-1.512 0-2.268.294-2.846a2.7 2.7 0 011.18-1.18c.578-.294 1.334-.294 2.846-.294h5.76c1.512 0 2.268 0 2.846.294a2.7 2.7 0 011.18 1.18c.294.578.294 1.334.294 2.846v.18m-14.4 0a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zm14.4 0a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zm-7.2 0a1.8 1.8 0 100 3.6 1.8 1.8 0 000-3.6zm0 0v-9m-5.4 0h10.8c.839 0 1.258 0 1.589-.137a1.8 1.8 0 00.974-.974c.137-.33.137-.75.137-1.589s0-1.258-.137-1.589a1.8 1.8 0 00-.974-.974C18.658 3 18.239 3 17.4 3H6.6c-.839 0-1.258 0-1.589.137a1.8 1.8 0 00-.974.974c-.137.331-.137.75-.137 1.59 0 .838 0 1.257.137 1.588a1.8 1.8 0 00.974.974c.331.137.75.137 1.589.137z"
        strokeWidth="1.35"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

OrganizeComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Organize = React.memo(OrganizeComponent);

export default Organize;
