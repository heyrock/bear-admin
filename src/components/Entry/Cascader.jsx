import React from 'react';
import { Card, Row, Col, Cascader } from 'antd';

const options = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];

const options_with_disabled = [{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖',
    }],
  }],
}, {
  value: 'jiangsu',
  label: '江苏',
  disabled: true,
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门',
    }],
  }],
}];

class CascaderDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <Cascader options={options} placeholder="请选择" />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="默认值">
              <Cascader defaultValue={['zhejiang', 'hangzhou', 'xihu']} options={options} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="切换按钮和结果分开">
              <Demo1 />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="移入展开">
              <Cascader
                options={options}
                expandTrigger="hover"
                placeholder="请选择"
                displayRender={(label) => {
                  return label[label.length - 1];
                }}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="禁用选项">
              <Cascader placeholder="请选择" options={options_with_disabled} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="选择即改变">
              <Cascader placeholder="请选择" options={options} changeOnSelect />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="自定义已选项" extra="例如给最后一项加上邮编链接">
              <Demo2 />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="搜索">
              <Cascader
                options={options}
                placeholder="请选择"
                showSearch
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="动态加载选项">
              <Demo3 />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="大小">
              <Cascader size="large" options={options} placeholder="请选择" /><br /><br />
              <Cascader options={options} placeholder="请选择" /><br /><br />
              <Cascader size="small" options={options} placeholder="请选择" /><br /><br />
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

class Demo1 extends React.Component {
  state = {
    text: '未选择',
  };

  onChange = (value, selectedOptions) => {
    this.setState({
      text: selectedOptions.map(o => o.label).join(', '),
    });
  }
  render() {
    return (
      <span>
        {this.state.text}
        &nbsp;&nbsp;
        <Cascader options={options} onChange={this.onChange}>
          <a>选择城市</a>
        </Cascader>
      </span>
    );
  }
}

class Demo2 extends React.Component {
  handleAreaClick = (e, label, option) => {
    e.stopPropagation();
    console.log('clicked', label, option);
  }

  render() {

    const options = [{
      value: 'zhejiang',
      label: '浙江',
      children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
          value: 'xihu',
          label: '西湖',
          code: 752100,
        }],
      }],
    }, {
      value: 'jiangsu',
      label: '江苏',
      children: [{
        value: 'nanjing',
        label: '南京',
        children: [{
          value: 'zhonghuamen',
          label: '中华门',
          code: 453400,
        }],
      }],
    }];

    const displayRender = (labels, selectedOptions) => labels.map((label, i) => {
      const option = selectedOptions[i];
      if (i === labels.length - 1) {
        return (
          <span key={option.value}>
            {label} (<a onClick={e => this.handleAreaClick(e, label, option)}>{option.code}</a>)
      </span>
        );
      }
      return <span key={option.value}>{label} / </span>;
    });

    return (
      <Cascader
        options={options}
        defaultValue={['zhejiang', 'hangzhou', 'xihu']}
        displayRender={displayRender}
        style={{ width: 270 }}
      />
    );
  }
}

class Demo3 extends React.Component {
  state = {
    inputValue: '',
    options: [{
      value: 'zhejiang',
      label: '浙江',
      isLeaf: false,
    }, {
      value: 'jiangsu',
      label: '江苏',
      isLeaf: false,
    }],
  };
  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
    this.setState({
      inputValue: selectedOptions.map(o => o.label).join(', '),
    });
  }
  loadData = (selectedOptions) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [{
        label: `${targetOption.label} Dynamic 1`,
        value: 'dynamic1',
      }, {
        label: `${targetOption.label} Dynamic 2`,
        value: 'dynamic2',
      }];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  }
  render() {

    return (
      <Cascader
        placeholder="请选择"
        options={this.state.options}
        loadData={this.loadData}
        onChange={this.onChange}
        changeOnSelect
      />
    );
  }
}

export default CascaderDemo;
