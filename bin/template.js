const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '0 0 24 24',
    className: 'dui-icon'
  }
  const fillAttrs = {
    fill: 'currentcolor',
    color: 'color',
    otherProps: '...otherProps'
  }
  const strokeAttrs = {
    fill: 'none',
    stroke: 'currentcolor',
    color: 'color',
    otherProps: '...otherProps'
  }
  return Object.assign({}, baseAttrs, style==='fill' ? fillAttrs : strokeAttrs)
}

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';

  const ${ComponentName}Component = (props) => {
    const { color, size, ...otherProps } = props;
    return (
      <svg ${attrs}>
        ${svgCode}
      </svg>
    )
  };
  
  ${ComponentName}Component.defaultProps = {
    color: '#0C0F0F',
    size: '24',
  }
  
  const ${ComponentName} = React.memo(${ComponentName}Component);
  
  export default ${ComponentName};
`

module.exports = { getAttrs, getElementCode }
