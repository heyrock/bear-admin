import React from 'react';
import { Card, Row, Col, Popover, Button } from 'antd';

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
const buttonWidth = 70;

class PopoverDemo extends React.Component {
  state = {
    visible: false,
  }
  hide = () => {
    this.setState({
      visible: false,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({ visible });
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
              <Popover content={content} title="Title">
                <Button type="primary">Hover me</Button>
              </Popover>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="三种触发方式">
              <Popover content={content} title="Title" trigger="hover">
                <Button>Hover me</Button>
              </Popover>{' '}
              <Popover content={content} title="Title" trigger="focus">
                <Button>Focus me</Button>
              </Popover>{' '}
              <Popover content={content} title="Title" trigger="click">
                <Button>Click me</Button>
              </Popover>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="从浮层内关闭">
              <Popover
                content={<a onClick={this.hide}>Close</a>}
                title="Title"
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
              >
                <Button type="primary">Click me</Button>
              </Popover>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="箭头指向">
              <Popover placement="topLeft" title={text} content={content}>
                <Button>Align edge / 边缘对齐</Button>
              </Popover>
              {' '}
              <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
                <Button>Arrow points to center / 箭头指向中心</Button>
              </Popover>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="位置">
              <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
                <Popover placement="topLeft" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>TL</Button>
                </Popover>
                <Popover placement="top" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>Top</Button>
                </Popover>
                <Popover placement="topRight" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>TR</Button>
                </Popover>
              </div>
              <div style={{ width: buttonWidth, float: 'left' }}>
                <Popover placement="leftTop" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>LT</Button>
                </Popover>
                <Popover placement="left" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>Left</Button>
                </Popover>
                <Popover placement="leftBottom" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>LB</Button>
                </Popover>
              </div>
              <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
                <Popover placement="rightTop" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>RT</Button>
                </Popover>
                <Popover placement="right" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>Right</Button>
                </Popover>
                <Popover placement="rightBottom" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>RB</Button>
                </Popover>
              </div>
              <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
                <Popover placement="bottomLeft" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>BL</Button>
                </Popover>
                <Popover placement="bottom" title={text} content={content} trigger="click">
                  <Button>Bottom</Button>
                </Popover>
                <Popover placement="bottomRight" title={text} content={content} trigger="click">
                  <Button style={btnStyle}>BR</Button>
                </Popover>
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


export default PopoverDemo;
