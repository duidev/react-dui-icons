/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path')
const fs = require('fs')
const format = require('prettier-eslint')
const processSvg = require('./processSvg')
const { parseName } = require('./utils')
const defaultStyle = process.env.npm_package_config_style || 'stroke'
const { getAttrs, getElementCode } = require('./template')

const rootDir = path.join(__dirname, '..')

// where icons code in
const srcDir = path.join(rootDir, 'src')
const iconsDir = path.join(rootDir, 'src/icons')
const svgDir = path.join(rootDir, 'src/svg')

// generate icons.js and icons.d.ts file
const generateIconsIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir)
    fs.mkdirSync(iconsDir)
  } else if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir)
  }

  const initialTypeDefinitions = `/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  `;

  fs.writeFileSync(path.join(rootDir, 'src', 'icons.js'), '', 'utf-8');
  fs.writeFileSync(
    path.join(rootDir, 'src', 'icons.d.ts'),
    initialTypeDefinitions,
    'utf-8',
  );
}

// generate attributes code
const attrsToString = (attrs, style) => {
  console.log('style: ', style)
  return Object.keys(attrs).map((key) => {
    // should distinguish fill or stroke
    if (key === 'width' || key === 'height' || key === 'color') {
      return key + '={' + attrs[key] + '}';
    }
    if (key === 'otherProps') {
      return '{...otherProps}';
    }
    return key + '="' + attrs[key] + '"';
  }).join(' ');
};

// generate icon code separately
const generateIconCode = async (svgFileName) => {
  // 从文件名解析出图标名称（不带扩展名）
  const name = svgFileName.replace('.svg', '');
  const names = parseName(name, defaultStyle);
  
  const location = path.join(svgDir, svgFileName);
  const destination = path.join(iconsDir, `${names.name}.js`);
  
  try {
    const code = fs.readFileSync(location);
    const svgCode = await processSvg(code);
    const ComponentName = names.componentName;
    const element = getElementCode(ComponentName, attrsToString(getAttrs(names.style), names.style), svgCode);
    const component = format({
      text: element,
      eslintConfig: {
        extends: 'airbnb',
      },
      prettierOptions: {
        bracketSpacing: true,
        singleQuote: true,
        parser: 'flow',
      },
    });

    fs.writeFileSync(destination, component, 'utf-8');

    console.log('Successfully built', ComponentName);
    return {ComponentName, name: names.name};
  } catch (error) {
    console.error(`Error processing ${svgFileName}:`, error.message);
    return null;
  }
}

// append export code to icons.js
const appendToIconsIndex = ({ComponentName, name}) => {
  if (!ComponentName || !name) return;
  
  const exportString = `export { default as ${ComponentName} } from './icons/${name}';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'icons.js'),
    exportString,
    'utf-8',
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'icons.d.ts'),
    exportTypeString,
    'utf-8',
  );
}

// Main execution
async function main() {
  // 初始化索引文件
  generateIconsIndex();
  
  try {
    // 读取SVG目录中的所有文件
    const svgFiles = fs.readdirSync(svgDir).filter(file => file.endsWith('.svg'));
    
    // 处理每个SVG文件
    for (const svgFile of svgFiles) {
      const result = await generateIconCode(svgFile);
      if (result) {
        appendToIconsIndex(result);
      }
    }
    
    console.log(`Successfully processed ${svgFiles.length} SVG icons`);
  } catch (error) {
    console.error('Error processing SVG files:', error);
  }
}

// 执行主函数
main();
