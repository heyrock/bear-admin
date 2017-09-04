import React from 'react';
import { Card, Row, Col, Badge, Icon, Button, Switch } from 'antd';
const ButtonGroup = Button.Group;

class BadgeDemo extends React.Component {
  state = {
    count: 5,
    show: true,
  }

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  }

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  }

  onChange = (show) => {
    this.setState({ show });
  }

  render() {
    const head_example = {
      width: '42px',
      height: '42px',
      borderRadius: '6px',
      background: '#eee',
      display: 'inline-block'
    }
    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <Badge count={5}>
                <span style={head_example}></span>
              </Badge>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Badge count={0} showZero>
                <span style={head_example}></span>
              </Badge>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="封顶数字">
              <Badge count={99}>
                <span style={head_example}></span>
              </Badge>&nbsp;&nbsp;&nbsp;&nbsp;
              <Badge count={100}>
                <span style={head_example}></span>
              </Badge>&nbsp;&nbsp;&nbsp;&nbsp;
              <Badge count={99} overflowCount={10}>
                <span style={head_example}></span>
              </Badge>&nbsp;&nbsp;&nbsp;&nbsp;
              <Badge count={1000} overflowCount={999}>
                <span style={head_example}></span>
              </Badge>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="可点击">
              <a>
                <Badge count={5}>
                  <span style={head_example} />
                </Badge>
              </a>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="独立使用">
              <Badge count={25} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Badge count={4} style={{ backgroundColor: '#fff', color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />{' '}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Badge count={109} style={{ backgroundColor: '#87d068' }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="讨嫌的小红点">
              <Badge dot>
                <Icon type="notification" />
              </Badge>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Badge dot>
                <a>Link something</a>
              </Badge>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="动态">
              <div>
                <Badge count={this.state.count}>
                  <span style={head_example}></span>
                </Badge>
                &nbsp;&nbsp;&nbsp;
                <ButtonGroup>
                  <Button onClick={this.decline}>
                    <Icon type="minus" />
                  </Button>
                  <Button onClick={this.increase}>
                    <Icon type="plus" />
                  </Button>
                </ButtonGroup>
                &nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Badge dot={this.state.show}>
                  <span style={head_example}></span>
                </Badge>
                &nbsp;&nbsp;&nbsp;
                <Switch onChange={this.onChange} checked={this.state.show} />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="状态点">
              <Badge status="success" />
              <Badge status="error" />
              <Badge status="default" />
              <Badge status="processing" />
              <Badge status="warning" />
              <br />
              <Badge status="success" text="Success" />
              <br />
              <Badge status="error" text="Error" />
              <br />
              <Badge status="default" text="Default" />
              <br />
              <Badge status="processing" text="Processing" />
              <br />
              <Badge status="warning" text="Warning" />
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default BadgeDemo;
