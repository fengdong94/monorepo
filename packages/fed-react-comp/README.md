# React 组件库生成工具

## 介绍

主要参考 <https://blog.harveydelaney.com/creating-your-own-react-component-library/>

该项目用于构建 [react](https://reactjs.org/) 组件库，基于 [typescript](https://www.typescriptlang.org/) 和 [sass](https://sass-lang.com/) 开发，使用 [rollup](https://github.com/rollup/rollup) 打包。

同时使用 [storybook](https://storybook.js.org/) 调试和生成组件使用文档，基于 [jest](https://jestjs.io/) 做组件测试。

## 开发

1. 启动 storybook server

    ```linux
    yarn workspace fed-react-comp storybook
    ```

2. 在 src 下创建组件文件夹，需包含下列文件：

   - xxx.tsx：组件文件
   - index.scss：样式文件（必须以index命名）
   - xxx.stories.tsx：用于 storybook 展示
   - xxx.test.tsx：用于测试

    注意不要在组件自身文件中引入样式，要在 .stories.tsx 中引入，因为打包的时候不需要打包样式。

    建议 xxx 以 index 命名，方便引用。

    也可以自己写脚本自动创建组件。

## 文档站点部署

运行以下指令生成静态文件，将 storybook-static 文件夹内容上传至 web 服务器或者配置 CI 工具自动部署。

```linux
yarn workspace fed-react-comp storybook:build
```
