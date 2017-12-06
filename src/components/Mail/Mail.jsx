import React from 'react';
import { Row, Col, Card, Checkbox, Button, Icon, Input, Tag, Table, Menu, Dropdown, Pagination } from 'antd';
import './Mail.less';
const ButtonGroup = Button.Group;

class EMail extends React.Component {

  state = {
    selectKey: 'inbox',
    title: '收件箱（15）'
  }

  handleSelect = (selectKey, title) => {
    this.setState({ selectKey, title });
  }

  render() {

    const { selectKey, title } = this.state;

    const inboxProps = {
      selectKey,
      title
    }

    return (
      <div className="mail">
        <Row>
          <Col span={24}>
            <Row>
              <Col sm={24} md={6} lg={6} xl={6}>
                <Card hoverable>
                  <Button type="primary" className="add-mail" icon="edit" onClick={() => this.handleSelect('add', '新建电子邮件')}>新建邮件 </Button>
                  <div className="left-panel">
                    <ul className="mail-nav">
                      <li className={selectKey === 'inbox' ? 'active' : ''} onClick={() => this.handleSelect('inbox', '收件箱（15）')}>
                        <Button>
                          <span className="iconleft"><Icon type="inbox" />{' '}收件箱</span>
                          <span className="iconright"><Tag color="#108ee9">15</Tag></span>
                        </Button>
                      </li>
                      <li className={selectKey === 'mail' ? 'active' : ''} onClick={() => this.handleSelect('mail', '已发邮件')}>
                        <Button>
                          <span className="iconleft"><Icon type="mail" />{' '}已发邮件</span>
                          <span className="iconright"></span>
                        </Button>
                      </li>
                      <li className={selectKey === 'draft' ? 'active' : ''} onClick={() => this.handleSelect('draft', '草稿')}>
                        <Button>
                          <span className="iconleft"><Icon type="file-unknown" />{' '}草稿</span>
                          <span className="iconright"></span>
                        </Button>
                      </li>
                      <li className={selectKey === 'trash' ? 'active' : ''} onClick={() => this.handleSelect('trash', '垃圾邮件')}>
                        <Button>
                          <span className="iconleft"><Icon type="delete" />{' '}垃圾邮件</span>
                          <span className="iconright"></span>
                        </Button>
                      </li>
                    </ul>
                  </div>
                </Card>
              </Col>
              <Col sm={24} md={1} lg={1} xl={1}></Col>
              <Col sm={24} md={17} lg={17} xl={17}>
                {
                  selectKey === 'add' ?
                    <Add title={title} onBack={() => this.handleSelect('inbox', '收件箱（15）')} />
                    :
                    selectKey === 'inbox' ?
                      <Inbox {...inboxProps} />
                      :
                      <Other title={title} />
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

// 收件箱
const Inbox = ({ selectKey, title }) => {
  const columns = [{
    title: 'Star',
    dataIndex: 'star',
    key: 'star',
    render: (text, record) => text ? <Icon type="star" /> : <Icon type="star-o" />,
  }, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => text,
  }, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  }, {
    title: 'Clip',
    dataIndex: 'clip',
    key: 'clip',
    render: text => text ? <Icon type="paper-clip" /> : ''
  }];

  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push({
      key: i,
      star: [1, 2, 3].find((n) => n >= i) > 0 ? true : false,
      name: 'Facebook',
      description: `Your new account is ready.`,
      clip: i % 2 === 0 ? true : false
    });
  }

  const menu = (
    <Menu>
      <Menu.Item key="1">标记为已读</Menu.Item>
      <Menu.Item key="2">标记为未读</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Card hoverable>
        <h4 style={{ fontSize: 20, color: '#a2a2a2', marginBottom: 20 }}>{title}</h4>
        <Table
          title={() => <div>
            <Row>
              <Col>
                <Dropdown overlay={menu}>
                  <Button>
                    <Checkbox></Checkbox>
                    <Icon type="down" />
                  </Button>
                </Dropdown>
                {' '}
                <Button icon="sync" />
                {' '}
                <ButtonGroup>
                  <Button type="primary" icon="backward" />
                  <Button type="primary" icon="forward" />
                </ButtonGroup>
                {' '}
                <Button icon="delete" />
                <span style={{ float: 'right' }}>
                  <Pagination simple defaultCurrent={1} total={50} />
                </span>
              </Col>
            </Row>
          </div>}
          showHeader={false}
          pagination={false}
          rowSelection={{}}
          columns={columns}
          dataSource={data} />
      </Card>
    </div>
  )
}

// 新建
const Add = ({ title, onBack }) => {

  return (
    <div className="add">
      <Card hoverable>
        <h4 style={{ fontSize: 20, color: '#a2a2a2', marginBottom: 20 }}>{title}</h4>
        <Row className="header">
          <Col>
            <ButtonGroup>
              <Button type="default" icon="rollback" onClick={onBack} />
              <Button type="default" icon="close" onClick={onBack} />
            </ButtonGroup>
          </Col>
        </Row>
        <div className="content">
          <Row>
            <Col span={24}>
              <Input addonBefore={<span>收&nbsp;&nbsp;件&nbsp; 人</span>} placeholder="格式: sender@example.com" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input addonBefore={<span>抄&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;送</span>} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input addonBefore="密件抄送" />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Input addonBefore={<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题</span>} />
            </Col>
          </Row>
        </div>
        <Row className="tools">
          <Col span={24}>
            <ButtonGroup>
              <Button type="default" icon="rollback" />
              <Button type="default" icon="info" />
              <Button type="default" icon="link" />
              <Button type="default" icon="lock" />
              <Button type="default" icon="book" />
              <Button type="default" icon="file" />
              <Button type="default" icon="paper-clip" />
              <Button type="default" icon="picture" />
              <Button type="default" icon="setting" />
              <Button type="default" icon="share-alt" />
              <Button type="default" icon="tag" />
              <Button type="default" icon="filter" />
              <Button type="default" icon="export" />
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Input.TextArea autosize={{ minRows: 10, maxRows: 20 }} defaultValue="这是测试输入的文本值" />
          </Col>
        </Row>
        <Row className="footera">
          <Col>
            <ButtonGroup>
              <Button type="default" onClick={onBack}>放弃</Button>
              <Button type="default" onClick={onBack}>保存</Button>
            </ButtonGroup>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="primary" onClick={onBack}>发送</Button>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

const Other = ({ title }) => {
  return (
    <div>
      <Card hoverable>
        <h4 style={{ fontSize: 20, color: '#a2a2a2', marginBottom: 20 }}>{title}</h4>
        <div style={{ minHeight: 300 }}>
          待续...
        </div>
      </Card>
    </div>
  )
}

export default EMail;
