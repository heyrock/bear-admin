import React from 'react';
import { Card, Row, Col, Icon, Switch } from 'antd';
const imgsrc = require('../../assets/img/profile.jpg');

class CardDemo extends React.Component {
  render() {
    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };

    return (
      <div>
        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card title="Card title" extra={<a href="">这是扩展l区域</a>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" extra={<span><Icon type="down" />{' '}<Icon type="close" /></span>}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" extra={<Switch size="small" />}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <Card loading title="预加载的卡片 - 数据读入前会有文本块样式" style={{ marginTop: '20px' }}>
          Whatever content
        </Card>
        <Card title="网格型内嵌卡片" noHovering style={{ marginTop: '20px' }}>
          <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
          <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
          <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
          <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
          <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
          <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
          <Card.Grid style={gridStyle}>卡片内容</Card.Grid>
        </Card>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <div>
                <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              </div>
              <div style={{ padding: '10px 16px' }}>
                <h3>smile</h3>
                <p>www.instagram.com</p>
              </div>
            </Card>
          </Col>
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <div>
                <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              </div>
              <div style={{ padding: '10px 16px' }}>
                <h3>smile</h3>
                <p>www.instagram.com</p>
              </div>
            </Card>
          </Col>
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <div>
                <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              </div>
              <div style={{ padding: '10px 16px' }}>
                <h3>smile</h3>
                <p>www.instagram.com</p>
              </div>
            </Card>
          </Col>
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <div>
                <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              </div>
              <div style={{ padding: '10px 16px' }}>
                <h3>smile</h3>
                <p>www.instagram.com</p>
              </div>
            </Card>
          </Col>
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <div>
                <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              </div>
              <div style={{ padding: '10px 16px' }}>
                <h3>smile</h3>
                <p>www.instagram.com</p>
              </div>
            </Card>
          </Col>
          <Col span={4}>
            <Card bodyStyle={{ padding: 0 }} noHovering>
              <div>
                <img style={{ display: 'block' }} alt="example" width="100%" src={imgsrc} />
              </div>
              <div style={{ padding: '10px 16px' }}>
                <h3>smile</h3>
                <p>www.instagram.com</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


export default CardDemo;
