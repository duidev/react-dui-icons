import React from 'react';

const CopyComponent = props => {
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
        d="M13.295 3.75h-4.6c-1.287 0-2.185.002-2.87.085-.583.07-.932.194-1.187.374l-.103.08a2.26 2.26 0 00-.13.12l-.12.13c-.225.263-.373.625-.454 1.291-.084.684-.085 1.582-.085 2.87v4.6c0 1.288.001 2.186.085 2.87.07.583.193.933.374 1.188l.08.103c.038.045.078.088.12.13l.13.12c.263.225.625.373 1.29.454.685.083 1.583.085 2.87.085h4.6c1.288 0 2.187-.002 2.87-.085.584-.07.933-.194 1.188-.374l.103-.08c.045-.038.089-.078.13-.12l.12-.13c.225-.263.374-.625.455-1.291.083-.684.085-1.582.085-2.87V8.7c0-1.288-.002-2.186-.085-2.87-.071-.583-.194-.933-.374-1.187l-.08-.104a2.213 2.213 0 00-.12-.13l-.13-.12c-.264-.224-.625-.373-1.291-.454-.684-.083-1.583-.085-2.87-.085z"
        strokeWidth="1.501"
      ></path>
      <path
        d="M21.496 13v.86c0 3.422 0 5.134-.98 6.262a3.996 3.996 0 01-.399.4c-1.128.978-2.839.978-6.261.978h-1.05"
        strokeWidth="1.501"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

CopyComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Copy = React.memo(CopyComponent);

export default Copy;
