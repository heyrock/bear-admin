import React from 'react';
import { Card, Row, Col, Icon, Button } from 'antd';
const ButtonGroup = Button.Group;

class ButtonDemo extends React.Component {

  render() {

    return (
      <div>
        <Row gutter={32}>
          <Col span={12}>
            <Card noHovering title="Antd 标准按钮">
              <Button type="primary">主按钮</Button>{' '}
              <Button>次按钮</Button>{' '}
              <Button type="dashed">虚线按钮</Button>{' '}
              <Button type="danger">危险按钮</Button>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="Antd 图标按钮">
              <div>
                <Button type="primary" shape="circle" icon="search" />{' '}
                <Button type="primary" icon="search">搜索</Button>{' '}
                <Button shape="circle" icon="search" />{' '}
                <Button icon="search">搜索</Button>{' '}
                <Button shape="circle" icon="search" />{' '}
                <Button icon="search">搜索</Button>{' '}
                <Button type="dashed" shape="circle" icon="search" />{' '}
                <Button type="dashed" icon="search">搜索</Button>{' '}
                <Button type="default" shape="circle" icon="forward" />{' '}
                <Button type="default" shape="circle" icon="caret-right" />{' '}
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={32} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="Antd 按钮尺寸">
              <h2>Large</h2>
              <Button type="primary" shape="circle" icon="download" size="large" />{' '}
              <Button type="primary" icon="download" size="large">下载</Button>{' '}
              <Button type="primary" size="large">普通</Button>{' '}
              <Button.Group size="large">
                <Button type="primary">
                  <Icon type="left" />后退
                </Button>
                <Button type="primary">
                  前进<Icon type="right" />
                </Button>
              </Button.Group>
              <h2>Default</h2>
              <Button type="primary" shape="circle" icon="download" size="default" />{' '}
              <Button type="primary" icon="download" size="default">下载</Button>{' '}
              <Button type="primary" size="default">普通</Button>{' '}
              <Button.Group size="default">
                <Button type="primary">
                  <Icon type="left" />后退
                </Button>
                <Button type="primary">
                  前进<Icon type="right" />
                </Button>
              </Button.Group>
              <h2>Small</h2>
              <Button type="primary" shape="circle" icon="download" size="small" />{' '}
              <Button type="primary" icon="download" size="small">下载</Button>{' '}
              <Button type="primary" size="small">普通</Button>{' '}
              <Button.Group size="small">
                <Button type="primary">
                  <Icon type="left" />后退
                </Button>
                <Button type="primary">
                  前进<Icon type="right" />
                </Button>
              </Button.Group>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="Antd 按钮不可用、加载中状态">
              <Button type="primary">主按钮</Button>{' '}
              <Button type="primary" disabled>主按钮(不可用)</Button>{' '}
              <Button type="primary" loading> 加载中</Button>{' '}
              <Button type="primary" size="small" loading>加载中</Button>{' '}
              <Button shape="circle" loading />{' '}
              <Button type="primary" shape="circle" loading />
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={12}>
            <Card noHovering title="Antd 按钮组合">
              <h2>Basic</h2>
              <ButtonGroup>
                <Button>Cancel</Button>
                <Button type="primary">OK</Button>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button disabled>L</Button>
                <Button disabled>M</Button>
                <Button disabled>R</Button>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button type="primary">L</Button>
                <Button>M</Button>
                <Button>M</Button>
                <Button type="dashed">R</Button>
              </ButtonGroup>{' '}

              <h2>With Icon</h2>
              <ButtonGroup>
                <Button type="primary">
                  <Icon type="left" />Go back
                </Button>
                <Button type="primary">
                  Go forward<Icon type="right" />
                </Button>
              </ButtonGroup>{' '}
              <ButtonGroup>
                <Button type="primary" icon="cloud" />
                <Button type="primary" icon="cloud-download" />
              </ButtonGroup>
            </Card>
          </Col>
          <Col span={12}>
            <Card noHovering title="Antd 幽灵按钮">
              幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。
              <div style={{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }}>
                <Button type="primary" ghost>主按钮</Button>{' '}
                <Button ghost>次按钮</Button>{' '}
                <Button type="dashed" ghost>虚线按钮</Button>{' '}
                <Button type="danger" ghost>危险按钮</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


export default ButtonDemo;
