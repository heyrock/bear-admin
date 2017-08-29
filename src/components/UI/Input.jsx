import React from 'react';
import { Card, Row, Col, Input, Icon, Select, Tooltip } from 'antd';
const Option = Select.Option;
const Search = Input.Search;
const InputGroup = Input.Group;
const { TextArea } = Input;

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 80 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com" style={{ width: 70 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

class InputDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <Input placeholder="Basic usage" />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="搜索框">
              <Search
                placeholder="input search text"
                style={{ width: 200 }}
                onSearch={value => console.log(value)}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="前置/后置标签">
              <div style={{ marginBottom: 16 }}>
                <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
              </div>
              <div style={{ marginBottom: 16 }}>
                <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
              </div>
              <div style={{ marginBottom: 16 }}>
                <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="适应文本高度的文本域">
              <TextArea placeholder="Autosize height based on content lines" autosize />
              <div style={{ margin: '24px 0' }} />
              <TextArea placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="文本域">
              <TextArea rows={4} />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="三种大小">
              <div>
                <Input size="large" placeholder="large size" />
                <br /><br />
                <Input placeholder="default size" />
                <br /><br />
                <Input size="small" placeholder="small size" />
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="输入时格式化展示">
              <NumericInputDemo />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="输入框组合">
            <InputGroup size="large">
          <Col span={4}>
            <Input defaultValue="0571" />
          </Col>
          <Col span={8}>
            <Input defaultValue="26888888" />
          </Col>
        </InputGroup>
        <br />
        <InputGroup compact>
          <Input style={{ width: '20%' }} defaultValue="0571" />
          <Input style={{ width: '30%' }} defaultValue="26888888" />
        </InputGroup>
        <br />
        <InputGroup compact>
          <Select defaultValue="Zhejiang">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="Xihu District, Hangzhou" />
        </InputGroup>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}

function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

class NumericInput extends React.Component {
  onChange = (e) => {
    const { value } = e.target;
    const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
    if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
      this.props.onChange(value);
    }
  }
  // '.' at the end or only '-' in the input box.
  onBlur = () => {
    const { value, onBlur, onChange } = this.props;
    if (value.charAt(value.length - 1) === '.' || value === '-') {
      onChange({ value: value.slice(0, -1) });
    }
    if (onBlur) {
      onBlur();
    }
  }
  render() {
    const { value } = this.props;
    const title = value ? (
      <span className="numeric-input-title">
        {value !== '-' ? formatNumber(value) : '-'}
      </span>
    ) : 'Input a number';
    return (
      <Tooltip
        trigger={['focus']}
        title={title}
        placement="topLeft"
        overlayClassName="numeric-input"
      >
        <Input
          {...this.props}
          onChange={this.onChange}
          onBlur={this.onBlur}
          placeholder="Input a number"
          maxLength="25"
        />
      </Tooltip>
    );
  }
}

class NumericInputDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  onChange = (value) => {
    this.setState({ value });
  }
  render() {
    return <NumericInput style={{ width: 120 }} value={this.state.value} onChange={this.onChange} />;
  }
}


export default InputDemo;
