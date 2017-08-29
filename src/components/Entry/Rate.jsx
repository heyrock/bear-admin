import React from 'react';
import { Card, Row, Col, Rate, Icon } from 'antd';

class RateDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <Rate />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="半星">
              <Rate allowHalf defaultValue={2.5} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="文案展现">
              <RaterDemo />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="只读">
              <Rate disabled defaultValue={2} />
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="其他字符">
              <Rate character={<Icon type="heart" />} allowHalf />
              <br />
              <Rate character="A" allowHalf style={{ fontSize: 36 }} />
              <br />
              <Rate character="好" allowHalf />
            </Card>
          </Col>
          <Col span={8}>
          </Col>
        </Row>
      </div >
    )
  }
}

class RaterDemo extends React.Component {
  state = {
    value: 3,
    count: null,
  }
  handleChange = (value) => {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    return (
      <span>
        <Rate onChange={this.handleChange} value={value} />
        {value && <span className="ant-rate-text">{value} stars</span>}
      </span>
    );
  }
}

export default RateDemo;
