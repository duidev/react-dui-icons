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

  const ${ComponentName} = /*#__PURE__*/ (function () {
    const component = function(props) {
      const { color, size, ...otherProps } = props;
      return (
        <svg ${attrs}>
          ${svgCode}
        </svg>
      )
    };
  
    component.defaultProps = {
      color: '#0C0F0F',
      size: '24',
    }

    return component
  })()

  export default ${ComponentName}
`

module.exports = { getAttrs, getElementCode }
