import React from 'react';
import { Card, Row, Col, Form, Button, Alert, Input, Tag, Icon } from 'antd';
const FormItem = Form.Item;
const Search = Input.Search;
const CheckableTag = Tag.CheckableTag;

class SearchDemo extends React.Component {

  render() {

    return (
      <div>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="交互示例1">
              <Demo1 />
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="交互示例2">
              <Demo2 />
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}

class Demo1 extends React.Component {

  state = {
    expand: true
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  render() {

    const { expand } = this.state;

    const formItemLayout = {
      labelCol: { span: 5 },
      wrapperCol: { span: 19 },
    };

    return (
      <div>
        {
          !expand ?
            <div id="components-form-demo-advanced-search">
              <Alert
                type="info"
                closeText="清空"
                message={<span>已输入的搜索条件：<Tag closable color="#108ee9">应用名称：DDS</Tag> <Tag closable color="#108ee9">应用类型：PPPL</Tag></span>} />
              <div style={{ textAlign: 'right', marginTop: 10 }}>
                <Search
                  defaultValue="DDS"
                  style={{ width: 200 }}
                  onSearch={value => console.log(value)}
                />
                <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                  高级搜索
                </a>
              </div>
              <div className="search-result-list">搜索结果</div>
            </div>
            :
            <div id="components-form-demo-advanced-search">
              <Form
                className="ant-advanced-search-form"
              >
                <Row gutter={40}>
                  <Col span={6}>
                    <FormItem {...formItemLayout} label="应用名称">
                      <Input placeholder="请输入" defaultValue="DDS" />
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem {...formItemLayout} label="应用类型">
                      <Input />
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem {...formItemLayout} label="应用分组">
                      <Input />
                    </FormItem>
                  </Col>
                  <Col span={6}>
                    <FormItem {...formItemLayout} label="应用创建者">
                      <Input />
                    </FormItem>
                  </Col>
                </Row>
                <Row>
                  <Col span={24} style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit">搜索</Button>
                    <Button style={{ marginLeft: 8 }}>清空</Button>
                    <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                      简易搜索
                    </a>
                  </Col>
                </Row>
              </Form>
              <div className="search-result-list">搜索结果</div>
            </div>
        }
      </div >
    )
  }
}

const tag1 = ['电影', '书籍', '音乐', '运动', '我是长标签', '标签', '长标签', '其他标签', '等等'];
const tag2 = ['我是标签', '我是长标签', '我是标签2', '我是标签3', '长标签', '标签', '我是标签5', '其他标签', '我是标签6'];
const tag3 = ['我是标签', '我是长标签', '我是标签2', '我是标签3', '长标签', '标签', '我是标签5', '其他标签', '我是标签6'];

class Demo2 extends React.Component {

  state = {
    selectedTags1: ['书籍'],
    selectedTags2: [],
    selectedTags3: ['长标签'],
    expand2: false
  }

  toggle = () => {
    const { expand2 } = this.state;
    this.setState({ expand2: !expand2 });
  }

  handleChange1(tag, checked) {
    const { selectedTags1 } = this.state;
    const nextSelectedTags = checked ?
      [tag] :
      selectedTags1.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags1: nextSelectedTags });
  }
  handleChange2(tag, checked) {
    const { selectedTags2 } = this.state;
    const nextSelectedTags = checked ?
      [...selectedTags2, tag] :
      selectedTags2.filter(t => t !== tag);
    this.setState({ selectedTags2: nextSelectedTags });
  }
  handleChange3(tag, checked) {
    const { selectedTags3 } = this.state;
    const nextSelectedTags = checked ?
      [...selectedTags3, tag] :
      selectedTags3.filter(t => t !== tag);
    this.setState({ selectedTags3: nextSelectedTags });
  }

  clear = () => {
    this.setState({ selectedTags1: [], selectedTags2: [], selectedTags3: [] });
  }

  render() {

    const { expand2, selectedTags1, selectedTags2, selectedTags3 } = this.state;

    return (
      <div>
        <div id="components-form-demo-advanced-search">
          <Row>
            <Col span={4} className="search-title-left">
              <span style={{ color: '#bfbfbf'}}>(单选)</span>热门标签分类1：
            </Col>
            <Col span={19} className="search-title-right">
              {tag1.map(tag => (
                <CheckableTag
                  key={tag}
                  checked={selectedTags1.indexOf(tag) > -1}
                  onChange={checked => this.handleChange1(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </Col>
            <Col span={1}>
              <span style={{ float: 'right' }}><a disabled>更多<Icon type='down' /></a></span>
            </Col>
          </Row>
          <Row>
            <Col span={4} className="search-title-left">
              <span style={{ color: '#bfbfbf'}}>(多选)</span>我是长分类2：
            </Col>
            <Col span={19} className="search-title-right">
              {
                expand2 ?
                  <ExpandApp />
                  :
                  tag2.map(tag => (
                    <CheckableTag
                      key={tag}
                      checked={selectedTags2.indexOf(tag) > -1}
                      onChange={checked => this.handleChange2(tag, checked)}
                    >
                      {tag}
                    </CheckableTag>
                  ))
              }
            </Col>
            <Col span={1}>
              <span style={{ float: 'right' }}>
                <a onClick={this.toggle}>
                  {!expand2 ? '更多' : '收起'}<Icon type={expand2 ? 'up' : 'down'} />
                </a>
              </span>
            </Col>
          </Row>
          <Row>
            <Col span={4} className="search-title-left">
              我是很长很长的分类3：
            </Col>
            <Col span={19} className="search-title-right">
              {tag3.map(tag => (
                <CheckableTag
                  key={tag}
                  checked={selectedTags3.indexOf(tag) > -1}
                  onChange={checked => this.handleChange3(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </Col>
            <Col span={1}>
              <span style={{ float: 'right' }}><a>更多<Icon type='down' /></a></span>
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button type="primary" htmlType="submit">搜索</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.clear}>清空</Button>
            </Col>
          </Row>
          <div className="search-result-list">搜索结果</div>
        </div>
      </div >
    )
  }
}

const tag5 = ['我是标签', '我是长标签', '我是标签2', '我是标签3', '长标签', '标签',
  '我是标签5', '其他标签', '我是标签6', '标签7', '标签8', '标签9', '标签10', '标签11', '标签12', '标签13', '标签14', '标签15'];

const ops = ['ALL', 'A-G', 'H-N', 'O-T', 'U-Z'];

class ExpandApp extends React.Component {
  state = {
    selectedTags: [],
    selectedOps: ['ALL']
  }

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ?
      [...selectedTags, tag] :
      selectedTags.filter(t => t !== tag);
    this.setState({ selectedTags: nextSelectedTags });
  }

  handleChangeOps(tag, checked) {
    const { selectedOps } = this.state;
    const nextSelectedTags = checked ?
      [tag] :
      selectedOps.filter(t => t !== tag);
    this.setState({ selectedOps: nextSelectedTags });
  }

  render() {

    const { selectedTags, selectedOps } = this.state;

    return (
      <div>
        <Row>
          <Col span={24}>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Row>
              <Col span={24}>
                {ops.map(tag => (
                  <CheckableTag
                    key={tag}
                    checked={selectedOps.indexOf(tag) > -1}
                    onChange={checked => this.handleChangeOps(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
                <Search
                  placeholder="请输入搜索内容"
                  style={{ width: 180 }}
                  onSearch={value => console.log(value)}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                {tag5.map(tag => (
                  <CheckableTag
                    key={tag}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={checked => this.handleChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

    )
  }
}

export default SearchDemo;
