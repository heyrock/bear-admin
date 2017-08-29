import React from 'react';
import { Card, Row, Col, Tag, Input, Tooltip, Button, Icon } from 'antd';
const { CheckableTag } = Tag;

const tagsFromServer = ['电影', '书籍', '音乐', '运动'];

class TagDemo extends React.Component {

  state = {
    tags: ['Unremovable', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: '',
    selectedTags: [],
  };

  preventDefault = (e) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }

  handleSelectChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked ?
      [...selectedTags, tag] :
      selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: '',
    });
  }

  saveInputRef = input => this.input = input

  render() {

    const { tags, inputVisible, inputValue, selectedTags } = this.state;

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <Tag>Tag 1</Tag>{' '}
              <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>{' '}
              <Tag closable>Tag 2</Tag>{' '}
              <Tag closable onClose={this.preventDefault}>Prevent Default</Tag>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="动态添加和删除">
              {tags.map((tag, index) => {
                const isLongTag = tag.length > 20;
                const tagElem = (
                  <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                  </Tag>
                );
                return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem;
              })}
              {inputVisible && (
                <Input
                  ref={this.saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={this.handleInputChange}
                  onBlur={this.handleInputConfirm}
                  onPressEnter={this.handleInputConfirm}
                />
              )}
              {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="可选择">
              <MyTag>Tag1</MyTag>{' '}
              <MyTag>Tag2</MyTag>{' '}
              <MyTag>Tag3</MyTag>{' '}
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="热门标签">
              <strong style={{ marginRight: 8 }}>选择分类:</strong>
              {tagsFromServer.map(tag => (
                <CheckableTag
                  key={tag}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={checked => this.handleSelectChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card noHovering title="多彩标签">
              <h4 style={{ marginBottom: 16 }}>系统预设:</h4>
              <div>
                <Tag color="pink">pink</Tag>
                <Tag color="red">red</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="purple">purple</Tag>
              </div>
              <h4 style={{ margin: '16px 0' }}>自定义:</h4>
              <div>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
                <Tag color="#f04134">#f04134</Tag>
                <Tag color="#7265e6">#7265e6</Tag>
                <Tag color="#ffbf00">#ffbf00</Tag>
                <Tag color="#00a854">#00a854</Tag>
                <Tag color="#00a854"><Icon type="mail" />{' '}10</Tag>
                <Tag color="#999999"><Icon type="star-o" />{' '}6</Tag>
                <Tag color="#f04134"><Icon type="like-o" />{' '}26 赞</Tag>
                <Tag color="#108ee9"><Icon type="user" />{' '}300+</Tag>
                <Tag color="#999999"><Icon type="notification" />{' '}11 未读消息</Tag>
              </div>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}

class MyTag extends React.Component {
  state = { checked: true };
  handleChange = (checked) => {
    this.setState({ checked });
  }
  render() {
    return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />;
  }
}


export default TagDemo;
