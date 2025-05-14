import React from 'react';

const EditComponent = props => {
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
        d="M11.742 6.298l5.5 5m-4.52 9h9m-17.443.594h2.863a2 2 0 001.414-.586l10.961-10.96a2 2 0 000-2.83l-2.823-2.822a2 2 0 00-2.828 0L3.042 14.517a2 2 0 00-.582 1.295l-.178 2.96a2 2 0 001.997 2.12z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

EditComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Edit = React.memo(EditComponent);

export default Edit;
