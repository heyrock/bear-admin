import React from 'react';
import moment from 'moment';
import timeago from 'timeago.js';
import { Col, Row, Card, Input, Button, Icon, Dropdown, Menu, Table, Tag, Badge } from 'antd';
const Search = Input.Search;
const timeagoInstance = timeago();

const data = [];
for (let i = 1; i <= 22; i++) {
  data.push({
    key: i,
    color: Math.floor((Math.random() * 10) + 1) % 2 === 0 ? '#2db7f5' : '#f50',
    description: `这是消息的详细内容 ${i}，这是消息的详细内容，很长很长很长·····`,
    isread: [1, 2, 3, 6, 9, 10].find((n) => n === i) > 0 ? true : false,
    datetime: moment().subtract(i, 'days').startOf('day').format('YYYY-MM-DD')
  });
}

const msgtype = [
  {
    key: 'all',
    text: '所有消息'
  },
  {
    key: 'read',
    text: '已读消息'
  },
  {
    key: 'unread',
    text: '未读消息'
  }
];

class Todo extends React.Component {

  state = {
    current: 'all',
    tableRowHoverIndex: -1
  }

  gettext = (current) => {
    let name = '所有消息';
    msgtype.find((n) => {
      if (n && n.key === current) {
        name = n.text;
        return;
      }
    })
    return name;
  }

  onTableRowHover = (index) => {
    this.setState({ tableRowHoverIndex: index });
  }

  handleMenuClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {

    const { current, tableRowHoverIndex } = this.state;

    const menu = (
      <Menu selectedKeys={[current]} onClick={this.handleMenuClick}>
        {msgtype.map((v) => { return <Menu.Item key={v.key}>{v.text}</Menu.Item> })}
      </Menu>
    );

    const columns = [{
      title: '消息',
      dataIndex: 'description',
      key: 'description',
      render: (text, record, index) => (
        <div onMouseEnter={() => this.onTableRowHover(index)}>
          <Tag color={record.color}><Icon type='sound' /></Tag>
          <span style={{ color: record.isread ? '#c1cbd0' : '' }}>{text}</span>
        </div>
      )
    }, {
      title: '时间',
      dataIndex: 'datetime',
      key: 'datetime',
      width: 150,
      render: (text, record, index) => (
        <div style={{ textAlign: 'left' }} onMouseEnter={() => this.onTableRowHover(index)}>
          {record.isread ? <Badge status="default" text="已读" /> : <Badge status="processing" text='未读' />}
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: '#c1cbd0', textAlign: 'right' }}>
            {timeagoInstance.format(text, 'zh_CN')}
          </span>
          <span style={{ fontSize: 14, cursor: 'pointer', float: 'right', display: tableRowHoverIndex === index ? 'block' : 'none' }}>
            {record.isread ? <Icon type="eye" title='标记未读' /> : <Icon type="eye-o" title='标记已读' />}{' '}
            <Icon type="delete" title='删除消息' />
          </span>
        </div>
      )
    }];

    return (
      <div>
        <Row>
          <Col span={24}>
            <Card
              noHovering
              bordered={false}
              extra={<div><Search
                placeholder="搜索"
                style={{ width: 150 }}
                onSearch={value => console.log(value)}
              /></div>}
              title={<Dropdown overlay={menu}>
                <Button style={{ border: 'none' }}>
                  {this.gettext(current)} <Icon type="down" />
                </Button>
              </Dropdown>}>
              <Table
                showHeader={false}
                pagination={{
                  showTotal: (total, range) => `共${total}条消息`
                }}
                columns={columns}
                dataSource={data} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Todo;
