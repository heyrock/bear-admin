import React from 'react';
import { Card, Row, Col, Affix, Button } from 'antd';

class AffixDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <Affix>
                <Button type="primary">Affix top</Button>
              </Affix>
              <br />
              <Affix offsetBottom={0}>
                <Button type="primary">Affix bottom</Button>
              </Affix>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="固定状态改变的回调">
              <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
                <Button>120px to affix top</Button>
              </Affix>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default AffixDemo;
