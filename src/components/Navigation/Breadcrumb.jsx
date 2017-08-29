import React from 'react';
import { Card, Row, Col, Breadcrumb, Icon } from 'antd';

class BreadcrumbDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="带有图标的">
              <Breadcrumb>
                <Breadcrumb.Item href="">
                  <Icon type="home" />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                  <Icon type="user" />
                  <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  Application
                </Breadcrumb.Item>
              </Breadcrumb>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="分隔符">
              <Breadcrumb separator=">">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
                <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default BreadcrumbDemo;
