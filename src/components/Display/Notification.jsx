import React from 'react';
import { Card, Row, Col, notification, Button, Icon, Select } from 'antd';
const { Option } = Select;
const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const title = '通知的标题';
const desc = '这是通知的内容。这是通知的内容。这是通知的内容。这是通知的内容。这是通知的内容。这是通知的内容。';
class NotificationDemo extends React.Component {

  close = () => {
    console.log('Notification was closed. Either the close button was clicked or duration time elapsed.');
  };

  render() {

    const openNotificationWithIcon = (type) => {
      notification[type]({
        message: title,
        description: desc,
      });
    };

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <Button type="primary" onClick={() => {
                notification.open({
                  message: title,
                  description: desc,
                });
              }}>打开通知框</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="带有图标的通知提醒框">
              <Button onClick={() => openNotificationWithIcon('success')}>成功</Button>{' '}
              <Button onClick={() => openNotificationWithIcon('info')}>信息</Button>{' '}
              <Button onClick={() => openNotificationWithIcon('warning')}>警告</Button>{' '}
              <Button onClick={() => openNotificationWithIcon('error')}>错误</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="自定义图标">
              <Button type="primary" onClick={() => {
                notification.open({
                  message: title,
                  description: desc,
                  icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
                });
              }}>打开通知框</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="自定义样式">
              <Button type="primary" onClick={() => {
                notification.open({
                  message: title,
                  description: desc,
                  style: {
                    width: 600,
                    marginLeft: 335 - 600,
                  },
                });
              }}>打开通知框</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="自动关闭的延时">
              <Button type="primary" onClick={() => {
                const args = {
                  message: title,
                  description: '我不会自动关闭。我不会自动关闭。我不会自动关闭。',
                  duration: 0,
                };
                notification.open(args);
              }}>打开通知框</Button>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="自定义按钮">
              <Button type="primary" onClick={() => {
                const key = `open${Date.now()}`;
                const btnClick = function () {
                  // to hide notification box
                  notification.close(key);
                };
                const btn = (
                  <Button type="primary" size="small" onClick={btnClick}>
                    关闭
                  </Button>
                );
                notification.open({
                  message: title,
                  description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
                  btn,
                  key,
                  onClose: this.close,
                });
              }}>打开通知框</Button>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="位置">
              <Select
                defaultValue="topRight"
                style={{ width: 120, marginRight: 10 }}
                onChange={(val) => {
                  notification.config({
                    placement: val,
                  });
                }}
              >
                {options.map(val => <Option key={val} value={val}>{val}</Option>)}
              </Select>
              <Button
                type="primary"
                onClick={() => {
                  notification.open({
                    message: title,
                    description: desc,
                  });
                }}
              >
                打开通知框
              </Button>
            </Card>
          </Col>
          <Col span={8}>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </div >
    )
  }
}


export default NotificationDemo;
