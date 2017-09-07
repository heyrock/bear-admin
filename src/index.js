import React from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';
import { message } from 'antd';
import Routers from './routerDyna';
import models from './models';
import './theme/skin.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const app = dva({
  onError(error) {
    message.error(error.message)
  },
});

app.use(createLoading());

models.forEach(m => app.model(m));

app.router(() => <Routers />);

app.start('#root');
