import React from 'react';

const NavFuturesDarkComponent = props => {
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
        d="M10.929 5.653L8.957 3.025C8.01 1.762 6 2.432 6 4.01c0 .907.736 1.642 1.643 1.642h3.286zm-.772-3.528C8.345-.291 4.5.99 4.5 4.01c0 .627.184 1.21.5 1.701h-.5a3.25 3.25 0 00-1.75 5.99v6.819a3.23 3.23 0 003.23 3.23h12.04a3.23 3.23 0 003.23-3.23v-6.82a3.25 3.25 0 00-1.75-5.99H19c.316-.49.5-1.073.5-1.7 0-3.02-3.845-4.302-5.657-1.886L12 4.582l-1.843-2.457zm9.593 10.078c-.082.006-.166.009-.25.009h-15c-.084 0-.167-.003-.25-.01v6.319c0 .955.774 1.73 1.73 1.73h12.04a1.73 1.73 0 001.73-1.73v-6.318zm-.25-4.991a1.75 1.75 0 110 3.5h-15a1.75 1.75 0 110-3.5h15zm-4.457-4.187L13.07 5.653h3.286c.908 0 1.643-.735 1.643-1.642 0-1.58-2.01-2.25-2.957-.986z"
        fill="#F9F9F9"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6.25a.75.75 0 01.75.75v13.2a.75.75 0 01-1.5 0V7a.75.75 0 01.75-.75z"
        fill="#00D5C8"
      ></path>
    </svg>
  );
};

NavFuturesDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavFuturesDark = React.memo(NavFuturesDarkComponent);

export default NavFuturesDark;
