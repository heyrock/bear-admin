import React from 'react';
import { Card, Row, Col, Pagination } from 'antd';

class PaginationDemo extends React.Component {
  state = {
    current: 3,
  }
  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  }
  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <Pagination defaultCurrent={1} total={50} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="更多">
              <Pagination defaultCurrent={6} total={500} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="改变">
              <Pagination showSizeChanger defaultCurrent={3} total={500} />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="跳转">
              <Pagination showQuickJumper defaultCurrent={2} total={500} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="迷你">
              <Pagination size="small" total={50} />
              <Pagination size="small" total={50} showSizeChanger showQuickJumper />
              <Pagination size="small" total={50} showTotal={(total) => { return `Total ${total} items` }} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="简洁">
              <Pagination simple defaultCurrent={2} total={50} />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="受控">
              <Pagination current={this.state.current} onChange={this.onChange} total={50} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="总数">
              <Pagination
                total={85}
                showTotal={total => `Total ${total} items`}
                pageSize={20}
                defaultCurrent={1}
              />
              <br />
              <Pagination
                total={85}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                pageSize={20}
                defaultCurrent={1}
              />
            </Card>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </div >
    )
  }
}


export default PaginationDemo;
