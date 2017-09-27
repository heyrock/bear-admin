import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createHashHistory';
import { message } from 'antd';
import models from './models';
import './theme/skin.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const app = dva({
  history: createHistory(),
  onError(error) {
    message.error(error.message)
  },
});

app.use(createLoading());
// 注册所有 model，也可在 router.js 中动态注册
models.forEach(m => app.model(m));

app.router(require('./router'));

app.start('#root');
