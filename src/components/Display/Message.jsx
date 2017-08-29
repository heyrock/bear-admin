import React from 'react';
import { Card, Row, Col, message, Button } from 'antd';

class MessageDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="普通提示">
              <Button type="primary" onClick={() => {
                message.info('This is a normal message');
              }}>显示消息提示</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="其他提示类型">
              <Button onClick={() => {
                message.success('This is a message of success');
              }}>成功</Button>{' '}
              <Button onClick={() => {
                message.error('This is a message of error');
              }}>错误</Button>{' '}
              <Button onClick={() => {
                message.warning('This is a message of warning');
              }}>警告</Button>{' '}
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="修改延时" extra="自定义时长 10s，默认时长为 3s">
              <Button onClick={() => {
                message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
              }}>自定义显示时长</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="加载中">
              <Button onClick={() => {
                const hide = message.loading('Action in progress..', 0);
                // Dismiss manually and asynchronously
                setTimeout(hide, 2500);
              }}>显示加载指示器</Button>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default MessageDemo;
