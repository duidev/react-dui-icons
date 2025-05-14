import React from 'react';

const TalkWhiteComponent = props => {
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
      <rect width="24" height="24" rx="12" fill="#fff"></rect>
      <path d="M12.058 6.03c3.619 0 6.553 2.286 6.553 5.108 0 2.82-2.934 5.107-6.553 5.107-.36 0-.72-.023-1.078-.069l-2.751 1.8c-.313.165-.423.147-.295-.258l.557-2.295c-1.797-.912-2.986-2.49-2.986-4.285 0-2.821 2.934-5.109 6.553-5.109zm3.686 5.03l.918-.89a.294.294 0 00-.41-.422l-1.203 1.164V9.95a.294.294 0 10-.589 0v1.596a.292.292 0 000 .138v.898a.295.295 0 00.59 0v-.85l.266-.258.89 1.269a.296.296 0 00.53-.234.293.293 0 00-.047-.105l-.945-1.345zm-1.846 1.2h-.91v-2.3a.295.295 0 00-.59 0v2.595c0 .162.132.295.295.295h1.205a.295.295 0 000-.59zm-3.655-.681l.434-1.066.399 1.066h-.833zm1.575.304v-.01a.292.292 0 00-.079-.2l-.652-1.747a.43.43 0 00-.392-.296.434.434 0 00-.407.28L9.25 12.452a.294.294 0 10.546.222l.206-.507h1.292l.186.5a.294.294 0 10.552-.207l-.215-.578zm-2.074-1.92a.295.295 0 00-.294-.295H7.425a.295.295 0 100 .589h.724v2.332a.295.295 0 10.59 0v-2.332h.71a.295.295 0 00.295-.295z"></path>
    </svg>
  );
};

TalkWhiteComponent.defaultProps = {
  color: '#0C0F0F',
  size: '24'
};

const TalkWhite = React.memo(TalkWhiteComponent);

export default TalkWhite;
