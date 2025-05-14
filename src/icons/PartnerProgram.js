import React from 'react';

const PartnerProgramComponent = props => {
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
        d="M13.606 13.03a.75.75 0 011.06 0l3.044 3.044-1.06 1.06-3.044-3.043a.75.75 0 010-1.06zm-2.743 2.768a.75.75 0 011.06 0l3.044 3.044-1.06 1.06-3.044-3.043a.75.75 0 010-1.06z"
        fill="#00DDD3"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.475 3.178a3.09 3.09 0 014.37 0l4.807 4.807a3.09 3.09 0 01-.01 4.379l-3.482 3.452c-.068.084-.14.165-.218.243l-4.764 4.763a3.09 3.09 0 01-4.37 0l-8.46-8.46a3.09 3.09 0 010-4.37l4.814-4.814a3.09 3.09 0 014.358-.012l1.546 1.421 1.41-1.409zm-.854 2.975l-.006.007-2.317 2.317-.612.593a1.59 1.59 0 00-.023 2.26l.19.19a1.59 1.59 0 002.23.029l1.565-1.501a2.75 2.75 0 013.951.15l1.3 1.45c.432.415.717.927.854 1.469l1.833-1.818a1.59 1.59 0 00.005-2.253l-4.807-4.807a1.59 1.59 0 00-2.248 0L12.62 6.153zm5.414 8.666a1.59 1.59 0 00-.189-2.103l-.023-.021-1.34-1.497a1.25 1.25 0 00-1.797-.068l-1.565 1.502a3.09 3.09 0 01-4.335-.057l-.189-.19a3.09 3.09 0 01.045-4.392l.607-.589 1.756-1.755L9.483 4.25l-.012-.011a1.59 1.59 0 00-2.248 0L2.41 9.053a1.59 1.59 0 000 2.248l8.46 8.46c.621.621 1.628.621 2.248 0l4.16-4.16a.753.753 0 01.114-.143l.644-.639z"
      ></path>
    </svg>
  );
};

PartnerProgramComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const PartnerProgram = React.memo(PartnerProgramComponent);

export default PartnerProgram;
