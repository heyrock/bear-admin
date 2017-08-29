import React from 'react';
import classnames from 'classnames';
import { Card, Col, Row } from 'antd';

class GridDemo extends React.Component {

  render() {

    const DemoBox = props => <p>{props.children}</p>;

    return (
      <div>
        <Row className="showcase">
          <Col span={24} id="components-grid-demo-basic">
            <Card title={<div className={classnames('card-header', { 'yellow': true })}>
              <h4>基础格栅</h4>
            </div>} bordered={false} noHovering extra="自定义了 card title 样式">
              <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
              </Row>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
                <Col span={8}>col-8</Col>
              </Row>
              <Row>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="showcase">
          <Col span={24} id="components-grid-demo-gutter">
            <Card title="区块间隔" bordered={false} noHovering>
              <Row gutter={16}>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                  <div className="gutter-box">col-6</div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="showcase">
          <Col span={24} id="components-grid-demo-offset">
            <Card title="左右偏移" bordered={false} noHovering>
              <Row>
                <Col span={8}>col-8</Col>
                <Col span={8} offset={8}>col-8</Col>
              </Row>
              <Row>
                <Col span={6} offset={6}>col-6 col-offset-6</Col>
                <Col span={6} offset={6}>col-6 col-offset-6</Col>
              </Row>
              <Row>
                <Col span={12} offset={6}>col-12 col-offset-6</Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="showcase">
          <Col span={24} id="components-grid-demo-flex">
            <Card title="Flex 布局" bordered={false} noHovering>
              <p>sub-element align left</p>
              <Row type="flex" justify="start">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <p>sub-element align center</p>
              <Row type="flex" justify="center">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <p>sub-element align right</p>
              <Row type="flex" justify="end">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <p>sub-element monospaced arrangement</p>
              <Row type="flex" justify="space-between">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>

              <p>sub-element align full</p>
              <Row type="flex" justify="space-around">
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
                <Col span={4}>col-4</Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="showcase">
          <Col span={24} id="components-grid-demo-flex">
            <Card title="Flex 对齐" bordered={false} noHovering>
              <p>Align Top</p>
              <Row type="flex" justify="center" align="top">
                <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
              </Row>

              <p>Align Center</p>
              <Row type="flex" justify="space-around" align="middle">
                <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
              </Row>

              <p>Align Bottom</p>
              <Row type="flex" justify="space-between" align="bottom">
                <Col span={4}><DemoBox value={100}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={50}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={120}>col-4</DemoBox></Col>
                <Col span={4}><DemoBox value={80}>col-4</DemoBox></Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="showcase">
          <Col span={24} id="components-grid-demo-flex-order">
            <Card title="Flex 排序" bordered={false} noHovering>
              <Row type="flex">
                <Col span={6} order={4}>1 col-order-4</Col>
                <Col span={6} order={3}>2 col-order-3</Col>
                <Col span={6} order={2}>3 col-order-2</Col>
                <Col span={6} order={1}>4 col-order-1</Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="showcase">
          <Col span={24} id="components-grid-demo-reponsive">
            <Card title="响应式布局" bordered={false} noHovering>
              <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4}>Col</Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>Col</Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}


export default GridDemo;
