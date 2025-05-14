import React from 'react';

const NavCopyTradingDarkComponent = props => {
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
        d="M9.7 9.483v-2.12C8.904 7.76 7.852 8 6.7 8c-1.153 0-2.204-.24-3-.636v2.119c.012.03.1.237.593.5.556.294 1.402.517 2.407.517 1.005 0 1.851-.223 2.406-.518.494-.262.582-.47.594-.499zM3.708 5.5c.03-.062.14-.235.538-.456.07-.039.143-.076.222-.112.55-.25 1.325-.432 2.232-.432 1.037 0 1.901.237 2.453.544.346.191.475.346.522.425a.335.335 0 01.017.031c-.03.062-.14.235-.539.457-.552.306-1.416.543-2.453.543s-1.901-.237-2.454-.543c-.399-.222-.509-.395-.538-.457zm7.492 0v4.12h-.005C11.083 10.944 9.113 12 6.7 12c-2.413 0-4.383-1.055-4.495-2.38H2.2V5.5C2.2 4.12 4.215 3 6.7 3s4.5 1.12 4.5 2.5z"
        fill="#F9F9F9"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 15a4.252 4.252 0 003.26 4.134l-.238-.952a.75.75 0 011.456-.364l.496 1.984A.75.75 0 018 20.75 5.75 5.75 0 012.25 15a.75.75 0 011.5 0zm16.5-6a4.252 4.252 0 00-3.26-4.134l.238.952a.75.75 0 11-1.456.364l-.495-1.984A.75.75 0 0116 3.25 5.75 5.75 0 0121.75 9a.75.75 0 01-1.5 0z"
        fill="#00D5C8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 16.805a3.251 3.251 0 013.163 2.5h-6.326a3.251 3.251 0 013.163-2.5zm-2.197-.962a4.75 4.75 0 00-2.553 4.212c0 .414.336.75.75.75h8a.75.75 0 00.75-.75 4.75 4.75 0 00-2.553-4.212 3 3 0 10-4.394 0zM19 13.8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill="#F9F9F9"
      ></path>
    </svg>
  );
};

NavCopyTradingDarkComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const NavCopyTradingDark = React.memo(NavCopyTradingDarkComponent);

export default NavCopyTradingDark;
