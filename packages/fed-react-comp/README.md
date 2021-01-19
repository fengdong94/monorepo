# React 组件库生成工具

## 介绍

主要参考 <https://blog.harveydelaney.com/creating-your-own-react-component-library/>

该项目用于构建 [react](https://reactjs.org/) 组件库，基于 [typescript](https://www.typescriptlang.org/) 和 [sass](https://sass-lang.com/) 开发，使用 [rollup](https://github.com/rollup/rollup) 打包。

同时使用 [storybook](https://storybook.js.org/) 调试和生成组件使用文档，基于 [jest](https://jestjs.io/) 做组件测试。

## 开发

1. 启动 storybook server

    ```linux
    yarn storybook
    ```

2. 在 src 下创建组件文件夹，需包含下列文件：

   - xxx.tsx：组件文件
   - xxx.scss：样式文件
   - xxx.stories.tsx：用于 storybook 展示
   - xxx.test.tsx：用于测试

    建议 xxx 以 index 命名，方便引用。

    也可以自己写脚本自动创建组件。

## 测试

```linux
yarn test
```

## 发布组件库

1. 打包组件库

    ```linux
    yarn build
    ```

2. npm 切换到默认源

    ```linux
    npm config set registry http://registry.npmjs.org
    ```

3. 登录 npm 账号

    ```linux
    npm login
    ```

4. 发布 npm 包，发布前记得修改版本号，否则会发布失败

    ```linux
    npm publish
    ```

5. 切回淘宝源或其他国内源

    ```linux
    npm config set registry https://registry.npm.taobao.org
    ```

## 文档站点部署

运行以下指令生成静态文件，将 storybook-static 文件夹内容上传至 web 服务器或者配置 CI 工具自动部署。

```linux
yarn storybook:build
```
