import React from 'react';
import { Card, Row, Col, Steps, Icon, Button, message } from 'antd';
import './Navigation.less';
const Step = Steps.Step;

const steps = [{
  title: '第一步',
  content: 'First-content',
}, {
  title: '第二步',
  content: 'Second-content',
}, {
  title: '第三步',
  content: 'Last-content',
}];

class StepsDemo extends React.Component {
  state = {
    current: 0,
  };

  next = () => {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev = () => {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {

    const { current } = this.state;

    return (
      <div>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="基本">
              <Steps current={1}>
                <Step title="已处理" description="这里是描述信息" />
                <Step title="当前" description="这里是描述信息" />
                <Step title="等待处理" description="这里是描述信息" />
              </Steps>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="迷你版">
              <Steps size="small" current={1}>
                <Step title="已处理" />
                <Step title="当前" />
                <Step title="等待处理" />
              </Steps>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="带图标的步骤条">
              <Steps>
                <Step status="finish" title="登录" icon={<Icon type="user" />} />
                <Step status="finish" title="验证" icon={<Icon type="solution" />} />
                <Step status="process" title="支付" icon={<Icon type="credit-card" />} />
                <Step status="wait" title="完成" icon={<Icon type="smile-o" />} />
              </Steps>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="步骤切换">
              <Steps current={current}>
                {steps.map(item => <Step key={item.title} title={item.title} />)}
              </Steps>
              <div className="steps-content">{steps[this.state.current].content}</div>
              <div className="steps-action">
                {
                  this.state.current < steps.length - 1
                  &&
                  <Button type="primary" onClick={() => this.next()}>下一步</Button>
                }
                {
                  this.state.current === steps.length - 1
                  &&
                  <Button type="primary" onClick={() => message.success('恭喜你，已完成!')}>完成</Button>
                }
                {
                  this.state.current > 0
                  &&
                  <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                    上一步
                  </Button>
                }
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="竖直方向的步骤条">
              <Steps direction="vertical" current={1}>
                <Step title="已处理" description="这里是描述信息" />
                <Step title="当前" description="这里是描述信息" />
                <Step title="等待处理" description="这里是描述信息" />
              </Steps>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="竖直方向的小型步骤条">
              <Steps direction="vertical" size="small" current={1}>
                <Step title="已处理" description="这里是描述信息" />
                <Step title="当前" description="这里是描述信息" />
                <Step title="等待处理" description="这里是描述信息" />
              </Steps>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="步骤运行错误">
              <Steps current={1} status="error">
                <Step title="已处理" description="这里是描述信息" />
                <Step title="当前" description="该步骤操作错误，请重新操作" />
                <Step title="等待处理" description="这里是描述信息" />
              </Steps>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="点状步骤条">
              <Steps progressDot current={1}>
                <Step title="已处理" description="这里是描述信息" />
                <Step title="当前" description="这里是描述信息" />
                <Step title="等待处理" description="这里是描述信息" />
              </Steps>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default StepsDemo;
