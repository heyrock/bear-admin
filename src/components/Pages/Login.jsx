import React from 'react';
import { hashHistory } from 'dva/router';
// import PropTypes from 'prop-types';
import { Button, Row, Input } from 'antd';
import { config } from 'utils';
import './Login.less';

const Login = () => {

  const handleLogin = () => {
    hashHistory.push('/')
  }

  return (
    <div>
      <div className="background"></div>
      <div className="card">
        <div className="logo">
          <img alt={'logo'} src={config.whiteLogoSrc} />
          <span>{config.name}</span>
        </div>
        <form>
          <Row style={{ textAlign: 'center' }}><Input size="large" placeholder="用户名" value="" /></Row>
          <Row style={{ textAlign: 'center' }}><Input size="large" type="password" placeholder="密码" value="" /></Row>
          <Row style={{ textAlign: 'center' }}>
            <Button type="primary" size="large" onClick={handleLogin}>登录</Button>
          </Row>
        </form>
      </div>
    </div>
  )
}

export default Login;
