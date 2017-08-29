import React from 'react';
import { Card, Row, Col, Radio, Button, Input } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class RadioDemo extends React.Component {
  state = {
    disabled: true,
    value: 1,
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

  render() {

    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <Radio>Radio</Radio>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="单选组合">
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </RadioGroup>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="不可用">
              <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
              <br />
              <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
              <div style={{ marginTop: 20 }}>
                <Button type="primary" onClick={this.toggleDisabled}>
                  切换
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="大小">
              <div>
                <RadioGroup defaultValue="a" size="large">
                  <RadioButton value="a">杭州</RadioButton>
                  <RadioButton value="b">上海</RadioButton>
                  <RadioButton value="c">北京</RadioButton>
                  <RadioButton value="d">成都</RadioButton>
                </RadioGroup>
              </div>
              <div style={{ marginTop: 16 }}>
                <RadioGroup defaultValue="a">
                  <RadioButton value="a">杭州</RadioButton>
                  <RadioButton value="b">上海</RadioButton>
                  <RadioButton value="c">北京</RadioButton>
                  <RadioButton value="d">成都</RadioButton>
                </RadioGroup>
              </div>
              <div style={{ marginTop: 16 }}>
                <RadioGroup defaultValue="a" size="small">
                  <RadioButton value="a">杭州</RadioButton>
                  <RadioButton value="b">上海</RadioButton>
                  <RadioButton value="c">北京</RadioButton>
                  <RadioButton value="d">成都</RadioButton>
                </RadioGroup>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="按钮样式">
              <div>
                <RadioGroup defaultValue="a">
                  <RadioButton value="a">杭州</RadioButton>
                  <RadioButton value="b">上海</RadioButton>
                  <RadioButton value="c">北京</RadioButton>
                  <RadioButton value="d">成都</RadioButton>
                </RadioGroup>
              </div>
              <div style={{ marginTop: 16 }}>
                <RadioGroup defaultValue="a">
                  <RadioButton value="a">杭州</RadioButton>
                  <RadioButton value="b" disabled>上海</RadioButton>
                  <RadioButton value="c">北京</RadioButton>
                  <RadioButton value="d">成都</RadioButton>
                </RadioGroup>
              </div>
              <div style={{ marginTop: 16 }}>
                <RadioGroup disabled defaultValue="a">
                  <RadioButton value="a">杭州</RadioButton>
                  <RadioButton value="b">上海</RadioButton>
                  <RadioButton value="c">北京</RadioButton>
                  <RadioButton value="d">成都</RadioButton>
                </RadioGroup>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="RadioGroup 垂直">
              <RadioGroup onChange={this.onChange} value={this.state.value}>
                <Radio style={radioStyle} value={1}>Option A</Radio>
                <Radio style={radioStyle} value={2}>Option B</Radio>
                <Radio style={radioStyle} value={3}>Option C</Radio>
                <Radio style={radioStyle} value={4}>
                  More...
                  {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
                </Radio>
              </RadioGroup>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default RadioDemo;
