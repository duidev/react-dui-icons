# React-DUI-Icons

一个简单实用的React图标库，支持SVG图标转React组件。

## 开发流程

### SVG图标准备
将SVG图标文件放入`./src/svg/`目录中。

### 生成React组件
运行`yarn generate`从SVG文件生成React组件。这将在`./src/icons/`目录下生成对应的组件文件。

### 本地开发
运行`yarn dev`启动本地开发环境，可以预览所有图标。

### 构建文档网站
运行`yarn build`构建文档网站。

### 构建NPM包
运行`yarn build:bundle`构建用于发布的NPM包。

### 发布
1. 更新`package.json`中的版本号
2. 推送到master分支
3. GitHub Actions将自动构建并发布到NPM以及更新文档网站

## 自动化流程
当你修改`package.json`(通常是更新版本号)并推送到master分支时，GitHub Actions会自动:
1. 生成图标组件
2. 构建NPM包
3. 发布到NPM
4. 更新文档网站

## 注意事项
1. 图标一般有描边（stroke）和填充（fill）两种样式，一个图标只能采用一种形式，不可以混合。填充样式的SVG可以通过图形软件将描边转换为填充形状。
2. 图标文件命名请使用英文（不可以含 /），因为这些命名最终会变为代码中的组件名。为了区分样式，可以在文件名添加 `-fill` 或 `-stroke` 后缀，生成的组件会根据这个后缀应用相应的样式。
3. 文档网站自动部署在 [https://duidev.github.io/react-dui-icons/](https://duidev.github.io/react-dui-icons/)
