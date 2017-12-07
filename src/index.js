import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
import createHistory from 'history/createHashHistory';
import 'moment/locale/zh-cn';
import { message } from 'antd';
import models from './models';
import router from './router';
import './theme/skin.less';

const app = dva({
  history: createHistory(),
  onError(error) {
    message.error(error.message)
  },
});

app.use(createLoading());

models.forEach(m => app.model(m));

app.router(router);

app.start('#root');
