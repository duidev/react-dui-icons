import React from 'react';

const SearchComponent = props => {
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
        d="M17 17l2.996 3m-1.25-8.75a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        strokeWidth="1.5"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

SearchComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const Search = React.memo(SearchComponent);

export default Search;
