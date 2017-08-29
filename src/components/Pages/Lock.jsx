import React from 'react';
import { hashHistory } from 'dva/router';
import { Button, Row, Input } from 'antd';
import { config } from 'utils';

const Lock = ( ) => {

  const handleUnlock = () => {
    hashHistory.push('/')
  }

  return (
    <div>
        <div className="background"></div>
        <div className="card">
            <div className="logo">
              <img alt={'logo'} src={config.whiteLogoSrc} />
              <span>Bear熊</span>
            </div>
            <Row style={{ textAlign: 'center' }}>
              <Input size="large" placeholder="输入密码" type="password" />
              <Button type="primary" size="large" onClick={handleUnlock}>解锁</Button>
            </Row>
          </div>
    </div>
  )
}

export default Lock;
