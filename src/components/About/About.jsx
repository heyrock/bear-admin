import React from 'react';
import { Tooltip, Icon } from 'antd';
import Highlight from 'react-highlight';
import 'highlight.js/styles/railscasts.css';
import './About.less';

class About extends React.Component {

  render() {
    return (
      <div className="about-content">
        <h1>关于</h1>
        <p>
          build upon create-react-app, reactjs, ant design, dva.js, webpack etc
        </p>
        <p>
          Bear Admin，一个 JavaScript 应用，项目由业界最优秀的 React 应用开发工具 create-react-app 初始化创建， 搭配 Antd 开箱即用的高质量 React 组件和轻量级应用框架 Dva.js 一起，非常适合后台产品。
        </p>
        <p>
          Bear Admin 同时也是个很好的前端脚手架学习示例，如果你在学习 React 或即将学习 React，它应该可以做为教程给你一些帮助。如果你准备使用 React 全家桶开发应用，它能够快速给你提供项目脚手架，为你节省前期部分工作。 让我们一起享受整个 React 生态圈和工具链带来的愉悦开发体验。
        </p>

        <p>
          在开始之前，推荐先学习 React、 ES2015、Node.js、Webpack 等知识，并正确安装和配置了 Node.js 环境。
        </p>

        <h3>技术栈</h3>
        <p>
          <Icon type="like-o" /> <Tooltip title="脚手架"><a href="https://github.com/facebookincubator/create-react-app">create-react-app</a></Tooltip><br />
          <Icon type="like-o" /> <Tooltip title="丰富的 React 组件"><a href="https://ant.design">ant design</a></Tooltip><br />
          <Icon type="like-o" /> <Tooltip title="redux + redux-saga 等轻量级封装库"><a href="https://github.com/dvajs/dva">dva.js</a></Tooltip><br />
          <Icon type="like-o" /> <Tooltip title="A JavaScript library for building user interfaces"><a href="https://facebook.github.io/react/">react</a></Tooltip><br />
          <Icon type="like-o" /> <Tooltip title={<span>完整的 React 路由解决方案 <br />注：为了 github pages 测试方便，使用了 hashHistory，如部署到生产环境，推荐使用 browserHistory</span>}><a href="https://github.com/ReactTraining/react-router">react-router</a></Tooltip><br />
          <Icon type="like-o" /> <Tooltip title="模块加载器兼打包工具"><a href="https://webpack.js.org/concepts/">webpack</a></Tooltip><br />
          <Icon type="like-o" /> <Tooltip title="转码"><a href="https://babeljs.io/">babel</a></Tooltip><br />
          ...
        </p>

        <h3>特性</h3>
        <p>
          <Icon type="smile-o" /> 简洁的界面<br />
          <Icon type="smile-o" /> 菜单主题和布局切换<br />
          <Icon type="smile-o" /> 格栅布局，fully responsive<br />
          <Icon type="smile-o" /> Code Splitting。开启 gzip，<a href="https://github.com/huzzbuzz/bear-admin/blob/master/screenshot/filesize.png">首屏文件仅100多KB</a>，应用载入速度超快<br />
          <Icon type="smile-o" /> 高质量脚手架<br />
          <Icon type="smile-o" /> eject 配置，按需定制<br />
          <Icon type="smile-o" /> 支持更多语言特性和 polyfills，发现更多，请访问 <a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills">create-react-app</a> 官网<br />
        </p>

        <h3>开始</h3>
        <p>
          1. 克隆源码
          <Highlight innerHTML={false}>
            git clone https://github.com/huzzbuzz/bear-admin.git
          </Highlight>
        </p>
        <p>
          2. 安装依赖
          <Highlight innerHTML={false}>
            cd bear-admin <br />
            npm i or yarn
          </Highlight>
        </p>
        <p>
          3. 调试应用
          <Highlight innerHTML={false}>
            npm start
          </Highlight>
        </p>
        <p>
          4. 发布应用
          <Highlight innerHTML={false}>
            npm run build
          </Highlight>
          it will builds the app for production to the build folder. your app is ready to be deployed.
        </p>

        <h3>更多</h3>
        <p>
          如何处理异步请求？<br />
          如何统一处理出错？<br />
          如何 mock 数据？<br />
          更多实战，请参阅：<br />
          &nbsp;&nbsp; - <a href="https://github.com/nuysoft/Mock/wiki">mockjs 文档</a><br />
          &nbsp;&nbsp; - <a href="https://github.com/dvajs/dva">dva 文档</a><br />
          &nbsp;&nbsp; - <a href="https://github.com/dvajs/dva-knowledgemap">dva 知识地图</a><br />
          &nbsp;&nbsp; - <a href="https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md">create-react-app 文档</a><br />
          &nbsp;&nbsp; - <a href="http://serverless-stack.com/chapters/code-splitting-in-create-react-app.html">code splitting in create-react-app</a><br />
        </p>

        <h3>致谢</h3>
        <p>
          create-react-app<br />
          react 全家桶<br />
          antd 全家桶<br />
          <br />
        </p>

        <h4>欢迎 <a href="https://github.com/huzzbuzz/bear-admin">star</a> 和 <a href="https://github.com/huzzbuzz/bear-admin">watch</a> 支持</h4>
        <h5><Icon type="copyright" />{' '}huzzbuzz</h5>
      </div>
    );
  }
}

export default About;
