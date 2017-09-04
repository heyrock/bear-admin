import React from 'react';
import { Card, Row, Col, Popconfirm, message, Button } from 'antd';

const text = '确认删除吗?';

class PopconfirmDemo extends React.Component {
  confirm = (e) => {
    console.log(e);
    message.success('选择了 是');
  }

  cancel = (e) => {
    console.log(e);
    message.error('选择了 否');
  }

  render() {
    const btnStyle = {
      width: 53.61
    }
    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <Popconfirm title="确认删除吗?" onConfirm={this.confirm} onCancel={this.cancel} okText="是" cancelText="否">
                <a>删除</a>
              </Popconfirm>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="国际化">
              <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                <a>Delete</a>
              </Popconfirm>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="位置">
              <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
                <Popconfirm placement="topLeft" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>TL</Button>
                </Popconfirm>
                <Popconfirm placement="top" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>Top</Button>
                </Popconfirm>
                <Popconfirm placement="topRight" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>TR</Button>
                </Popconfirm>
              </div>
              <div style={{ width: 70, float: 'left' }}>
                <Popconfirm placement="leftTop" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>LT</Button>
                </Popconfirm>
                <Popconfirm placement="left" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>Left</Button>
                </Popconfirm>
                <Popconfirm placement="leftBottom" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>LB</Button>
                </Popconfirm>
              </div>
              <div style={{ width: 70, marginLeft: 304 }}>
                <Popconfirm placement="rightTop" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>RT</Button>
                </Popconfirm>
                <Popconfirm placement="right" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>Right</Button>
                </Popconfirm>
                <Popconfirm placement="rightBottom" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>RB</Button>
                </Popconfirm>
              </div>
              <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
                <Popconfirm placement="bottomLeft" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>BL</Button>
                </Popconfirm>
                <Popconfirm placement="bottom" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button>Bottom</Button>
                </Popconfirm>
                <Popconfirm placement="bottomRight" title={text} onConfirm={this.confirm} okText="是" cancelText="否">
                  <Button style={btnStyle}>BR</Button>
                </Popconfirm>
              </div>
            </Card>
          </Col>
          <Col span={12}>
          </Col>
        </Row>
      </div >
    )
  }
}


export default PopconfirmDemo;
