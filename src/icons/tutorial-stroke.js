import React from 'react';

const TutorialComponent = props => {
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
        d="M18.611 3.291a2.75 2.75 0 013.639 2.603v10.935c0 1.295-1.14 2.395-2.574 2.538l-.29.016c-.78.006-1.613.073-2.357.27l-.312.091c-.687.225-1.479.475-2.224.707l-1.946.6c-.266.08-.565.072-.857-.026l-.125-.046c-.687-.293-1.8-.722-3.18-1.095l-.609-.155c-.904-.22-1.91-.3-2.851-.312l-.4-.001c-1.512.012-2.775-1.137-2.775-2.506V6.187l.005-.171a2.75 2.75 0 013.36-2.51l.165.043 6.201 1.836c.305.09.627.095.933.016l.13-.038 6.067-2.072z"
        strokeWidth="1.5"
      ></path>
      <path d="M12 9v8" strokeWidth="1.5" strokeLinecap="round"></path>
    </svg>
  );
};

TutorialComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Tutorial = React.memo(TutorialComponent);

export default Tutorial;
