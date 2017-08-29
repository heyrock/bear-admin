import React from 'react';
import { Card, Row, Col, Progress, Button } from 'antd';
const ButtonGroup = Button.Group;

class ProgressDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="标准进度条">
              <Progress percent={30} /><br /><br />
              <Progress percent={50} status="active" /><br /><br />
              <Progress percent={70} status="exception" /><br /><br />
              <Progress percent={100} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="进度圈">
              <Progress type="circle" percent={75} />{' '}
              <Progress type="circle" percent={70} status="exception" />{' '}
              <Progress type="circle" percent={100} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="小型进度条">
              <Progress percent={30} strokeWidth={5} /><br /><br />
              <Progress percent={50} strokeWidth={5} status="active" /><br /><br />
              <Progress percent={70} strokeWidth={5} status="exception" /><br /><br />
              <Progress percent={100} strokeWidth={5} />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="进度圈动态展示">
              <Demo1 />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="仪表盘">
              <Progress type="dashboard" percent={75} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="自定义文字格式">
              <Progress type="circle" percent={75} format={percent => `${percent} Days`} />{' '}
              <Progress type="circle" percent={100} format={() => 'Done'} />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="动态展示">
              <Demo2 />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="小型进度圈">
              <Progress type="circle" percent={30} width={80} />{' '}
              <Progress type="circle" percent={70} width={80} status="exception" />{' '}
              <Progress type="circle" percent={100} width={80} />
            </Card>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </div >
    )
  }
}

class Demo1 extends React.Component {
  state = {
    percent: 0,
  }
  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }
  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }
  render() {
    return (
      <div>
        <Progress type="circle" percent={this.state.percent} />
        {' '}
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  }
}

class Demo2 extends React.Component {
  state = {
    percent: 0,
  }
  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }
  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }
  render() {
    return (
      <div>
        <Progress percent={this.state.percent} />
        <br /><br />
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  }
}


export default ProgressDemo;
