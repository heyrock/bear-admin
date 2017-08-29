import React from 'react';
import { Card, Row, Col, AutoComplete, Input, Icon, Button } from 'antd';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const { TextArea } = Input;

class AutoCompleteDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <Demo1 />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="自定义选项">
              <Demo2 />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="自定义输入组件">
              <Demo3 />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="不区分大小写">
              <AutoComplete
                style={{ width: 200 }}
                dataSource={['Burns Bay Road', 'Downing Street', 'Wall Street']}
                placeholder="试试输入 `b`"
                filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="查询模式 - 确定类目">
              <Demo4 />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="查询模式 - 不确定类目">
              <Demo5 />
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}

class Demo1 extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSearch={this.handleSearch}
        placeholder="请输入"
      />
    );
  }
}


class Demo2 extends React.Component {
  state = {
    result: [],
  }

  handleSearch = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  }

  render() {
    const { result } = this.state;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>;
    });
    return (
      <AutoComplete
        style={{ width: 200 }}
        onSearch={this.handleSearch}
        placeholder="请输入"
      >
        {children}
      </AutoComplete>
    );
  }
}


class Demo3 extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  handleKeyPress = (ev) => {
    console.log('handleKeyPress', ev);
  }

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200, height: 50 }}
        onSearch={this.handleSearch}
        placeholder="请输入"
      >
        <TextArea onKeyPress={this.handleKeyPress} style={{ height: 50 }} />
      </AutoComplete>
    );
  }
}


class Demo4 extends React.Component {
  renderTitle = (title) => {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >更多
      </a>
      </span>
    );
  }

  render() {

    const dataSource = [{
      title: '话题',
      children: [{
        title: 'AntDesign',
        count: 10000,
      }, {
        title: 'AntDesign UI',
        count: 10600,
      }],
    }, {
      title: '问题',
      children: [{
        title: 'AntDesign UI 有多好',
        count: 60100,
      }, {
        title: 'AntDesign 是啥',
        count: 30010,
      }],
    }, {
      title: '文章',
      children: [{
        title: 'AntDesign 是一个设计语言',
        count: 100000,
      }],
    }];

    const options = dataSource.map(group => (
      <OptGroup
        key={group.title}
        label={this.renderTitle(group.title)}
      >
        {group.children.map(opt => (
          <Option key={opt.title} value={opt.title}>
            {opt.title}
            <span className="certain-search-item-count">{opt.count} 人 关注</span>
          </Option>
        ))}
      </OptGroup>
    )).concat([
      <Option disabled key="all" className="show-all">
        <a
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看所有结果
    </a>
      </Option>,
    ]);
    return (
      <div className="certain-category-search-wrapper" style={{ width: 250 }}>
        <AutoComplete
          className="certain-category-search"
          dropdownClassName="certain-category-search-dropdown"
          dropdownMatchSelectWidth={false}
          dropdownStyle={{ width: 300 }}
          size="large"
          style={{ width: '100%' }}
          dataSource={options}
          placeholder="请输入"
          optionLabelProp="value"
        >
          <Input suffix={<Icon type="search" className="certain-category-icon" />} />
        </AutoComplete>
      </div>
    )
  }
}


class Demo5 extends React.Component {
  state = {
    dataSource: [],
  }

  getRandomInt = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }

  searchResult = (query) => {
    return (new Array(this.getRandomInt(5))).join('.').split('.')
      .map((item, idx) => ({
        query,
        category: `${query}${idx}`,
        count: this.getRandomInt(200, 100),
      }));
  }

  renderOption = (item) => {
    return (
      <Option key={item.category} text={item.category}>
        {item.query} 在
      <a
          href={`https://s.taobao.com/search?q=${item.query}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.category}
        </a>
        区块中
      <span className="global-search-item-count">约 {item.count} 个结果</span>
      </Option>
    );
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: value ? this.searchResult(value) : [],
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <div className="global-search-wrapper" style={{ width: 300 }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={dataSource.map(this.renderOption)}
          onSearch={this.handleSearch}
          placeholder="请输入"
          optionLabelProp="text"
        >
          <Input
            suffix={(
              <Button className="search-btn" size="large" type="primary">
                <Icon type="search" />
              </Button>
            )}
          />
        </AutoComplete>
      </div>
    );
  }
}


export default AutoCompleteDemo;
