import React from 'react';
import { Card, Row, Col, Avatar, Badge, Button } from 'antd';
const img = require('../../assets/img/profile.jpg');
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

class AvatarDemo extends React.Component {
  state = {
    user: UserList[0],
    color: colorList[0],
  };

  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    });
  }

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <div>
                <Avatar size="large" icon="user" />{' '}
                <Avatar icon="user" />{' '}
                <Avatar size="small" icon="user" />{' '}
              </div>
              <div>
                <Avatar shape="square" size="large" icon="user" />{' '}
                <Avatar shape="square" icon="user" />{' '}
                <Avatar shape="square" size="small" icon="user" />{' '}
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="类型">
              <Avatar icon="user" />{' '}
              <Avatar>U</Avatar>{' '}
              <Avatar>USER</Avatar>{' '}
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />{' '}
              <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>{' '}
              <Avatar src={img} />{' '}
              <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="带徽标的头像">
              <span style={{ marginRight: 24 }}>
                <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
              </span>
              <span>
                <Badge dot><Avatar shape="square" icon="user" /></Badge>
              </span>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="自动调整字符大小">
              <Avatar style={{ backgroundColor: this.state.color }} size="large">{this.state.user}</Avatar>
              <Button size="small" style={{ marginLeft: 16 }} onClick={this.changeUser}>Change</Button>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default AvatarDemo;
