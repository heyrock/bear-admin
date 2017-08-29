import React from 'react';
import { Card, Row, Col, Form, Mention, Button } from 'antd';
const Nav = Mention.Nav;
const { toString, toContentState, getMentions } = Mention;
const FormItem = Form.Item;

const users = ['张三', '李四', '王五', 'Test', '中文', 'にほんご'];
const tags = ['1.0', '2.0', '3.0'];
const webFrameworks = [
  { name: 'React', type: 'JavaScript' },
  { name: 'Angular', type: 'JavaScript' },
  { name: 'Laravel', type: 'PHP', disabled: true },
  { name: 'Flask', type: 'Python' },
  { name: 'Django', type: 'Python' },
];
const webFrameworksWithIcon = [
  { name: 'React', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/LFIeMPzdLcLnEUe.svg' },
  { name: 'Angular', type: 'JavaScript', icon: 'https://zos.alipayobjects.com/rmsportal/PJTbxSvzYWjDZnJ.png' },
  { name: 'Dva', type: 'Javascript', icon: 'https://zos.alipayobjects.com/rmsportal/EYPwSeEJKxDtVxI.png' },
  { name: 'Flask', type: 'Python', icon: 'https://zos.alipayobjects.com/rmsportal/xaypBUijfnpAlXE.png' },
];


class MentionDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <Mention
                style={{ width: '100%', height: 100 }}
                onChange={(text) => {
                  console.log(toString(text));
                }}
                defaultValue={toContentState('@张三')}
                suggestions={users}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="异步加载">
              <AsyncMentionDemo />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="自定义建议">
              <CustomNavMentionDemo />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="自定义建议（含头像）">
              <CustomNavMentionWithIconDemo />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="配合 Form 使用">
              <WithFormDemo />
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="自定义触发字符" extra="通过 prefix 属性自定义触发字符。默认为 @, 可以定义为数组">
              <CustomMentionDemo />
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


class AsyncMentionDemo extends React.Component {
  state = {
    suggestions: [],
    loading: false,
  }
  fetchSuggestions = (value, callback) => {
    setTimeout(() => {
      callback(users.filter(item => item.indexOf(value) !== -1));
    }, 500);
  }
  onSearchChange = (value) => {
    this.fetchSuggestions(value, (suggestions) => {
      this.setState({
        suggestions,
        loading: false,
      });
    });
    this.setState({
      loading: true,
    });
  }
  render() {
    const { suggestions, loading } = this.state;
    return (
      <Mention
        style={{ width: '100%', height: 100 }}
        loading={loading}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
      />
    );
  }
}

class CustomNavMentionDemo extends React.Component {
  state = {
    suggestions: [],
  }
  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworks.filter(item =>
      item.name.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion => (
      <Nav
        value={suggestion.name}
        data={suggestion}
      >
        <span>{suggestion.name} - {suggestion.type}</span>
      </Nav>
    ));
    this.setState({ suggestions });
  }
  render() {
    const { suggestions } = this.state;
    return (
      <Mention
        placeholder="@选择某人"
        style={{ width: '100%', height: 100 }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
      />
    );
  }
}

class CustomNavMentionWithIconDemo extends React.Component {
  state = {
    suggestions: [],
  }
  onSearchChange = (value) => {
    const searchValue = value.toLowerCase();
    const filtered = webFrameworksWithIcon.filter(item =>
      item.name.toLowerCase().indexOf(searchValue) !== -1
    );
    const suggestions = filtered.map(suggestion => (
      <Nav
        value={suggestion.name}
        data={suggestion}
        disabled={suggestion.disabled}
      >
        <span>
          <img alt={suggestion.name} style={{ height: 16, width: 16, marginRight: 5, float: 'left' }} src={suggestion.icon} />
          {suggestion.name} - {suggestion.type}
        </span>
      </Nav>
    ));
    this.setState({ suggestions });
  }
  render() {
    const { suggestions } = this.state;
    return (
      <Mention
        style={{ width: '100%', height: 100 }}
        suggestions={suggestions}
        onSearchChange={this.onSearchChange}
      />
    );
  }
}

class WithFormApp extends React.Component {
  state = {
    initValue: toContentState('@李四'),
  }
  handleReset = (e) => {
    e.preventDefault();
    this.props.form.resetFields();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      console.log('Submit!!!');
      console.log(values);
    });
  }
  checkMention = (rule, value, callback) => {
    const { getFieldValue } = this.props.form;
    const mentions = getMentions(getFieldValue('mention'));
    if (mentions.length < 2) {
      callback(new Error('More than one must be selected!'));
    } else {
      callback();
    }
  }
  render() {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    console.log('>> render', getFieldValue('mention') === this.state.initValue);
    return (
      <Form layout="horizontal">
        <FormItem
          id="control-mention"
          label="Top coders"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          {getFieldDecorator('mention', {
            rules: [
              { validator: this.checkMention },
            ],
            initialValue: this.state.initValue,
          })(
            <Mention
              suggestions={users}
              style={{ height: 60 }}
            />
            )}
        </FormItem>
        <FormItem wrapperCol={{ span: 14, offset: 6 }}>
          <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={this.handleReset}>Reset</Button>
        </FormItem>
      </Form>
    );
  }
}

const WithFormDemo = Form.create()(WithFormApp);

class CustomMentionDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      suggestions: [],
    };
  }
  onSearchChange = (value, trigger) => {
    console.log('onSearchChange', value, trigger);
    const dataSource = trigger === '@' ? users : tags;
    this.setState({
      suggestions: dataSource.filter(item => item.indexOf(value) !== -1),
    });
  }
  render() {
    return (
      <Mention
        style={{ width: '100%', height: 100 }}
        placeholder="输入 @ 或 # 试一试"
        prefix={['@', '#']}
        onSearchChange={this.onSearchChange}
        suggestions={this.state.suggestions}
      />
    );
  }
}

export default MentionDemo;
