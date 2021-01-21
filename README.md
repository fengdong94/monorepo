# Monorepo

## 介绍

基于 lerna 和 yarn workspace 实现的 monorepo 多项目统一管理方案，由外层容器提供 eslint、typescript、unit test 等基础能力，使用 learn 进行发布和版本管理。

## 测试

```linux
yarn test
```

## 发布组件库

1. 查看最近修改

    ```linux
    lerna updated
    ```

2. 打包组件库

    ```linux
    yarn workspace <package-name> build
    ```

3. npm 切换到默认源

    ```linux
    npm config set registry http://registry.npmjs.org
    ```

4. 登录 npm 账号

    ```linux
    npm login
    ```

5. 发布 npm 包

    ```linux
    lerna publish
    ```

6. 切回淘宝源或其他国内源

    ```linux
    npm config set registry https://registry.npm.taobao.org
    ```
