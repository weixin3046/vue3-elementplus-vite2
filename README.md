### 目录结构

layout/index.vue // layout 入口文件

layout/main // 布局组件 文件夹

layout/component/logo // 图标组件 文件夹

layout/component/navMenu // 导航组件 文件夹

layout/component/aside.vue // 侧边栏组件

layout/component/mainView.vue // 布局入口文件

views/home/index.vue

### 启动

 npm install 安装依赖

 npm run dev 启动开发环境

| npm                                  | yarn                          | 用法                  |
| ------------------------------------ | ----------------------------- | --------------------- |
| npm install                          | yarn install                  | 一键安装依赖          |
| npm install [package] --save / -S    | yarn add [package]            | 安装到dependencies    |
| npm install [package] --save-dev/ -D | yarn add [package] --save-dev | 安装到devDependencies |
| npm install [package]@[Version]      | yarn add [package]@[Version]  | 指定版本号下载更新    |
| npm install [package] --global       | yarn global add [package]     | 全局安装某个包        |
| npm update --global                  | yarn updade upgrade           | 更新所有包            |
| npm uninstall [package]              | yarn remove [package]         | 删除某个包            |
