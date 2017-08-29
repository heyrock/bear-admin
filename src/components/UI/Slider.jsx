import React from 'react';
import { Card, Row, Col, Slider, Switch, Icon, InputNumber } from 'antd';
import './Slider.less';

class SliderDemo extends React.Component {


  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <Base />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="带输入框的滑块，和 InputNumber 组件保持同步">
              <IntegerStep />
              <DecimalStep />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="带 icon 的滑块">
              <IconSlider min={0} max={20} value={0} icon={['frown-o', 'smile-o']} />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="自定义提示">
              <Slider tipFormatter={(value) => { return `${value}%` }} />
              <Slider tipFormatter={null} />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="垂直方向">
              <VerticalSlider />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="带标签的滑块">
              <MarksSlider />
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}

class Base extends React.Component {
  state = {
    disabled: false,
  };
  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }
  render() {
    const { disabled } = this.state;
    return (
      <div>
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </div>
    );
  }
}

class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={1}
            max={20}
            style={{ marginLeft: 16 }}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

class DecimalStep extends React.Component {
  state = {
    inputValue: 0,
  }
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  }
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={0} max={1} onChange={this.onChange} value={this.state.inputValue} step={0.01} />
        </Col>
        <Col span={4}>
          <InputNumber
            min={0}
            max={1}
            style={{ marginLeft: 16 }}
            step={0.01}
            value={this.state.inputValue}
            onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  }
}

class IconSlider extends React.Component {
  constructor(props) {
    super(props);
    const { max, min } = props;
    const mid = ((max - min) / 2).toFixed(5);
    this.state = {
      preIconClass: this.props.value >= mid ? '' : 'anticon-highlight',
      nextIconClass: this.props.value >= mid ? 'anticon-highlight' : '',
      mid,
      sliderValue: this.props.value,
    };
  }
  handleChange = (v) => {
    this.setState({
      preIconClass: v >= this.state.mid ? '' : 'anticon-highlight',
      nextIconClass: v >= this.state.mid ? 'anticon-highlight' : '',
      sliderValue: v,
    });
  }
  render() {
    return (
      <div className="icon-wrapper">
        <Icon className={this.state.preIconClass} type={this.props.icon[0]} />
        <Slider {...this.props} onChange={this.handleChange} value={this.state.sliderValue} />
        <Icon className={this.state.nextIconClass} type={this.props.icon[1]} />
      </div>
    );
  }
}

class VerticalSlider extends React.Component {

  render() {
    const style = {
      float: 'left',
      height: 300,
      marginLeft: 70,
    };

    const marks = {
      0: '0°C',
      26: '26°C',
      37: '37°C',
      100: {
        style: {
          color: '#f50',
        },
        label: <strong>100°C</strong>,
      },
    };

    return (
      <div style={{ height: 300 }}>
        <div style={style}>
          <Slider vertical defaultValue={30} />
        </div>
        <div style={style}>
          <Slider vertical range step={10} defaultValue={[20, 50]} />
        </div>
        <div style={style}>
          <Slider vertical range marks={marks} defaultValue={[26, 37]} />
        </div>
      </div>
    );
  }
}


class MarksSlider extends React.Component {

  render() {
    const marks = {
      0: '0°C',
      26: '26°C',
      37: '37°C',
      100: {
        style: {
          color: '#f50',
        },
        label: <strong>100°C</strong>,
      },
    };

    return (
      <div style={{ height: 300 }}>
        <h4>included=true</h4>
        <Slider marks={marks} defaultValue={37} />
        <Slider range marks={marks} defaultValue={[26, 37]} />

        <h4>included=false</h4>
        <Slider marks={marks} included={false} defaultValue={37} />

        <h4>marks & step</h4>
        <Slider marks={marks} step={10} defaultValue={37} />

        <h4>step=null</h4>
        <Slider marks={marks} step={null} defaultValue={37} />
      </div>
    );
  }
}


export default SliderDemo;
