import React from 'react';
import { Card, Row, Col, Checkbox, Button } from 'antd';

class CheckBoxDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">

            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="受控的 Checkbox">

            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="全选">

            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="Checkbox 组">

            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default CheckBoxDemo;
