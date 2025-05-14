import React from 'react';

const DisplayFillComponent = props => {
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
        d="M2.85 4.8a.75.75 0 01.75-.75h16.8a.75.75 0 010 1.5H3.6a.75.75 0 01-.75-.75zm0 7.2a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm9.982 3.385c.486-1.483 2.044-2.635 3.968-2.635s3.483 1.152 3.969 2.635a.64.64 0 01.029.123v.018a1.924 1.924 0 010 .148v.019a.634.634 0 01-.01.063.914.914 0 01-.02.06c-.485 1.482-2.044 2.634-3.968 2.634s-3.482-1.152-3.968-2.634l-.019-.06a.634.634 0 01-.01-.063v-.02a1.932 1.932 0 010-.146v-.02a.64.64 0 01.01-.062.88.88 0 01.019-.06zM16.8 11.25c-2.504 0-4.685 1.507-5.394 3.668a1.875 1.875 0 00-.092.407 2.38 2.38 0 00-.013.275c0 .073.002.186.013.275.025.196.054.29.092.408.709 2.16 2.89 3.667 5.394 3.667s4.686-1.506 5.394-3.667c.039-.119.067-.212.092-.408a2.38 2.38 0 00.014-.275c0-.073-.002-.186-.014-.275a1.868 1.868 0 00-.092-.408c-.708-2.16-2.89-3.667-5.394-3.667zM18 15.6a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0zM3.6 19.65a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z"
        fill="#222727"
      ></path>
    </svg>
  );
};

DisplayFillComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const DisplayFill = React.memo(DisplayFillComponent);

export default DisplayFill;
