import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
import { message } from 'antd';
import RouterIndex from './routerDyna';
import models from './models';
import './theme/skin.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const app = dva({
  ...createLoading({
    effects: true,
  }),
  onError(error) {
    message.error(error.message)
  },
});

models.forEach(m => app.model(m.default));

app.router(() => <RouterIndex />);

app.start('#root');
