![](https://github.com/huzzbuzz/bear-admin/blob/master/screenshot/logo-bear-black.jpg)                   

[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)
![](https://img.shields.io/badge/language-javascript-orange.svg)
<!--[![](https://travis-ci.org/huzzbuzz/bear-admin.svg?branch=master)](https://travis-ci.org/huzzbuzz/bear-admin)-->        

[![create-react-app](https://img.shields.io/badge/create--react--app-%5E1.0.13-3b5998.svg)](https://github.com/facebookincubator/create-react-app)
[![React](https://img.shields.io/badge/react-%5E16.2.0-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![Ant Design](https://img.shields.io/badge/ant--design-%5E3.0.0-brightgreen.svg?style=flat-square)](https://github.com/ant-design/ant-design)
[![dva](https://img.shields.io/badge/dva-%5E2.1.0-brightgreen.svg)](https://github.com/dvajs/dva)             


## [預覽 Preview](http://d5pp9t.coding-pages.com/)

Bear Admin，一個JavaScript 應用，項目由業界最優秀的React 應用開發工具create-react-app 初始化創建， 搭配Antd 開箱即用的高質量React 組件和輕量級應用框架Dva.js 一起，*非常適合後台產品*。

Bear Admin 同時也是個很好的前端腳手架學習示例，如果你在學習 React 或即將學習 React，它應該可以做為教程給你一些幫助。如果你準備使用 React 全家桶開發應用，它能夠快速給你提供項目腳手架，為你節省前期部分工作。讓我們一起享受整個 React 生態圈和工具鏈帶來的愉悅開發體驗。

在開始之前，推薦先學習 React、 ES2015、Node.js、Webpack 等知識，並正確安裝和配置了 Node.js 環境。

<hr />

#### [更新日誌](./CHANGELOG.md)      

#### 技術棧            
 👍🏻[create-react-app](https://github.com/facebookincubator/create-react-app)         
 👍🏻[ant design](https://ant.design/index-cn)       
 👍🏻[dva.js](https://github.com/dvajs/dva)     
 👍🏻[react](https://facebook.github.io/react/)     
 👍🏻[react-router](https://github.com/ReactTraining/react-router)      
 👍🏻[webpack](https://webpack.js.org/concepts/)      
 👍🏻[babel](https://babeljs.io/)     
...       

#### 特性       
 :yum:簡潔的界面       
 :yum:菜單主題和佈局切換       
 :yum:格柵佈局，fully responsive       
 :yum:Code Splitting。开启 gzip，[首屏文件僅100多KB](https://github.com/huzzbuzz/bear-admin/blob/master/screenshot/filesize.png)，應用載入速度超快                
 :yum:高質量腳手架                 
 :yum:eject create-react-app 配置，按需定制（OR [override create-react-app webpack configs without ejecting](https://github.com/timarney/react-app-rewired)）                     
 :yum:支持更多語言特性和 polyfills，發現更多，請訪問 [create-react-app](https://github.com/facebookincubator/create-react-app) 官網

#### 開始
1. 克隆源碼       
```
git clone https://github.com/huzzbuzz/bear-admin.git
```

2. 安裝依賴         
```
cd bear-admin 
npm i or yarn
```

3. 調試應用         
```
npm start
```

4. 發布應用         
```
npm run build
```
> it will builds the app for production to the build folder. your app is ready to be deployed.        


#### 更多       

如何處理異步請求？       
如何統一處理出錯？            
如何 mock 數據？       
更多實戰，請參閱：
   - [mockjs 文檔](https://github.com/nuysoft/Mock/wiki)      
   - [dva 文檔](https://github.com/dvajs/dva)     
   - [dva 知識地圖](https://github.com/dvajs/dva-knowledgemap)
   - [create-react-app 文檔](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)   
   - [code splitting in create-react-app](http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html)

#### 致謝     
create-react-app      
react 全家桶     
antd 全家桶       

:heartbeat::heartbeat: 歡迎 star 支持 :heartbeat::heartbeat: 

<hr />     

#### 顶部菜单
![1](https://user-images.githubusercontent.com/16314691/29705003-bbcbd414-89ae-11e7-82df-1acd2a998324.jpg)
#### 左侧菜单
![2](https://user-images.githubusercontent.com/16314691/29705022-d5cb4d36-89ae-11e7-8ded-73f116e49e28.jpg)
#### 黑色主题
![3](https://user-images.githubusercontent.com/16314691/29705023-d5cbeb7e-89ae-11e7-8d38-ef003c73a6fc.jpg)
#### 个人资料
![4](https://user-images.githubusercontent.com/16314691/29705026-d5d1456a-89ae-11e7-9e1f-aad58ef1501e.jpg)
#### Antd 图标&其他
![5antd](https://user-images.githubusercontent.com/16314691/29705024-d5cdc7fa-89ae-11e7-9068-eb6f7e7ee656.jpg)
#### 自定义表格
![6](https://user-images.githubusercontent.com/16314691/29705025-d5cf6628-89ae-11e7-9548-67d076734642.jpg)
#### 自适应
![7](https://user-images.githubusercontent.com/16314691/29705027-d5deae62-89ae-11e7-82a2-e7dbd702d67d.jpg)
#### Ant-Motion Logo 动画
![8 ant](https://user-images.githubusercontent.com/16314691/29705202-9483fb74-89af-11e7-903a-f4b45b51f766.jpg)
#### Ant-Motion 详细说明切换
![9](https://user-images.githubusercontent.com/16314691/29705203-9494e63c-89af-11e7-9146-07a152e3c972.jpg)        


#### 目录结构

```bash
├── /build/           # 打包输出
├── /config/          # create-react-app 配置
│ ├── /webpack.config.dev.js/   # 开发配置
│ ├── /webpack.config.prod.js/  # 生产配置
├── /public/         # 公共文件
├── /scripts/        # create-react-app 脚本
├── /src/            # 项目源码
│ ├── /assets/      # 资源文件
│ ├── /components/  # 示例组件
│ ├── /containers/  # layout 组件
│ ├── /models/      # dva 数据模型
│ ├── /theme/       # 皮肤样式
│ ├── /utils/       # 工具函数
│ │ └── config.js    # 项目配置
│ ├── route.js      # 路由配置
│ └── index.js      # 入口文件
└── package.json    # 项目信息
```

:heartbeat::heartbeat: 欢迎 star 支持 :heartbeat::heartbeat: 
