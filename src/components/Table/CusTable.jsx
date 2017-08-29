import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import moment from 'moment';
import { Row, Col, Card, Checkbox, Table, Input, Modal, Progress, Badge, Button, Dropdown, Icon, Menu, Tooltip, Popconfirm, message } from 'antd';
const Search = Input.Search;


function subscription(state) {
  const type = state > 80 ? 'success' : state < 30 ? 'error' : 'info';
  const msg = state > 80 ? '成功' : state < 30 ? '失败' : '成功，应用运行中';
  message[type](`订阅报警${msg}`);
}

function info(title) {
  Modal.info({
    title: <span>{`配置 ${title} 报警指标`}</span>,
    content: (
      <div>
        <p>这里是操作区域</p>
        <p>here is operation area</p>
      </div>
    ),
    onOk() { },
    onCancel() { },
    okText: '保存配置',
    cancelText: '取消'
  });
}

const columns = [{
  title: '应用名',
  dataIndex: 'name',
  key: 'name',
  width: 120,
}, {
  title: '已配报警指标',
  dataIndex: 'already',
  key: 'already',
  render: (text) => (
    <span>
      <Badge status="success" text="成功" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Badge status="error" text="错误" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Badge status="default" text="默认" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Badge status="processing" text="处理中" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Badge status="warning" text="警告" />
    </span>
  )
}, {
  title: '可配报警指标',
  dataIndex: 'none',
  key: 'none',
  width: 150,
}, {
  title: '进度',
  dataIndex: 'state',
  key: 'state',
  width: 90,
  render: (text) => (
    <span>
      <Tooltip title={text > 80 ? '即将完成' : text < 30 ? '进度有点慢哦' : '进行中'}>
        <Progress type="circle" strokeWidth={15} percent={text} format={() => ''} width={15} status={text > 80 ? 'success' : text < 30 ? 'exception' : 'active'} />
        <span style={{ paddingLeft: 8 }}>{`${text}%`}</span>
      </Tooltip>
    </span>
  )
}, {
  title: '时间',
  dataIndex: 'datetime',
  key: 'datetime',
  width: 120,
}, {
  title: '操作',
  key: 'action',
  width: 150,
  render: (text, record) => (
    <span>
      <a onClick={() => info(record.name)}>配置</a>
      <span className="ant-divider" />
      <a onClick={() => subscription(record.state)}>订阅报警</a>
      <span className="ant-divider" />
      <Popconfirm placement="left" title={`您确认删除 ${record.name} 应用`} okText="是" cancelText="否" onConfirm={() => { message.success('点击了是') }} onCancel={() => { message.error('点击了否') }}>
        <a>删除</a>
      </Popconfirm>
    </span>
  ),
}];

const data = [];
for (let i = 1; i <= 36; i++) {
  data.push({
    key: i,
    name: 'tradecore' + i,
    already: Math.floor((Math.random() * 5) + 1),
    none: `共 ${Math.floor((Math.random() * 10) + 1)} 项未配置报警`,
    state: Math.floor((Math.random() * 99) + 1),
    datetime: moment().subtract(i, 'days').startOf('day').format('YYYY-MM-DD'),
  });
}

const title = () => <div>
  <Row>
    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
      <h2>报警指标统计</h2>
    </Col>
    <Col xs={24} sm={24} md={12} lg={16} xl={16} style={{ textAlign: 'right' }}>
      <Dropdown overlay={<Menu>
        {columns.map((v, k) => {
          return <Menu.Item key={k}><Checkbox defaultChecked={true}>{v.title}</Checkbox></Menu.Item>
        })}
      </Menu>}>
        <Button>
          列表选项 <Icon type="down" />
        </Button>
      </Dropdown>
      {' '}
      <Search
        placeholder="输入搜索内容"
        style={{ width: 200 }}
        onSearch={value => console.log(value)}
      />
    </Col>
  </Row>
</div>;

class CusTableDemo extends React.Component {
  state = {
    bordered: false,
    pagination: {
      showQuickJumper: true,
      showTotal: (total, range) => `共${total}条记录`
    },
    size: 'default',
    title,
    showHeader: true,
  }

  render() {
    const { app } = this.props;
    const { siderRespons } = app;
    const extenProps = siderRespons ? Object.assign(this.state, { scroll: { x: 1300 } }) : this.state;

    return (
      <div>
        <Card noHovering>
          <Table {...extenProps} columns={columns} dataSource={data} />
        </Card>
      </div>
    );
  }
}

CusTableDemo.propTypes = {
  app: PropTypes.object,
}

export default connect(({ app }) => ({ app }))(CusTableDemo);
