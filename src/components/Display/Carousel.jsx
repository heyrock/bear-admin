import React from 'react';
import { Card, Row, Col, Carousel } from 'antd';

class CarouselDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="基本">
              <Carousel afterChange={(a, b, c) => {
                console.log(a, b, c);
              }}>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
              </Carousel>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="垂直显示">
              <Carousel vertical>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
              </Carousel>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="切换效果为渐显">
              <Carousel effect="fade">
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
              </Carousel>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="自动切换">
              <Carousel autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
              </Carousel>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default CarouselDemo;
