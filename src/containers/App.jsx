import React from 'react';
import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { Spin } from 'antd';
import LayoutLeft from './Layout/Left/Layout';
import LayoutTop from './Layout/Top/Layout';
import './App.less';

class App extends React.Component {

  render() {

    const { app } = this.props;
    const { menuMode, fakeGlobal } = app;

    return (
      <div>
        <Spin size="large" spinning={fakeGlobal}>
          {
            menuMode === 'left' ?
              <LayoutLeft {...this.props} />
              :
              <LayoutTop {...this.props} />
          }
        </Spin>
      </div>
    );
  }
}

export default withRouter(connect(({ app }) => ({ app }))(App));
