import React from 'react';

const CheckDoneComponent = props => {
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
        d="M13.3 3.75H8.7c-1.288 0-2.186.002-2.87.085-.583.07-.933.194-1.187.374l-.104.08a2.256 2.256 0 00-.13.12l-.12.13c-.225.263-.373.625-.454 1.291-.083.684-.085 1.582-.085 2.87v4.6c0 1.288.002 2.186.085 2.87.07.583.194.933.374 1.187l.08.104c.038.045.079.088.12.13l.13.12c.263.225.625.373 1.291.454.684.083 1.582.085 2.87.085h4.6c1.288 0 2.186-.002 2.87-.085.583-.07.933-.194 1.187-.374l.104-.08a2.2 2.2 0 00.13-.12l.12-.13c.225-.263.373-.625.454-1.291.083-.684.085-1.582.085-2.87V8.7c0-1.288-.002-2.186-.085-2.87-.07-.583-.194-.933-.374-1.187l-.08-.104a2.21 2.21 0 00-.12-.13l-.13-.12c-.263-.225-.625-.373-1.291-.454-.684-.083-1.582-.085-2.87-.085z"
        strokeWidth="1.501"
      ></path>
      <path
        d="M21.5 13v.86c0 3.422 0 5.134-.979 6.262a4.007 4.007 0 01-.4.4c-1.127.978-2.839.978-6.261.978h-1.05"
        strokeWidth="1.501"
        strokeLinecap="round"
      ></path>
      <path
        d="M8 12l2 2 4.5-4.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

CheckDoneComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const CheckDone = React.memo(CheckDoneComponent);

export default CheckDone;
