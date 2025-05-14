import React from 'react';

const NewCommunityComponent = props => {
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
        d="M21.066 9.656c1.015 1.037 1.662 2.388 1.745 3.892a5.876 5.876 0 01-.326 2.284 6.147 6.147 0 01-.522 1.109l-.01.017.004.002c.186.053.347.14.479.25.515.427.577 1.191-.063 1.588-.936.58-2.31 1.158-4.295 1.37m-6.777-8.888l.725 1.085m2.596-2.988l.725 1.085m-5.182-7.806c-4.969 0-8.997 4.173-8.997 9.32 0 1.515.35 2.948.97 4.214l-.362.214c-.683.404-.87 1.424-.181 2a12.472 12.472 0 004.826 2.46c2.521.652 4.334.54 5.534.248 4.111-.86 7.207-4.623 7.207-9.136 0-5.147-4.028-9.32-8.997-9.32z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

NewCommunityComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NewCommunity = React.memo(NewCommunityComponent);

export default NewCommunity;
