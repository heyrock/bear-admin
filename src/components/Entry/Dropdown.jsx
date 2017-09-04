import React from 'react';
import { Card, Row, Col, Menu, Dropdown, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class DropdownDemo extends React.Component {

  render() {

    const menu = (
      <Menu>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3d menu item</Menu.Item>
      </Menu>
    );

    return (
      <div>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="基本">
              <Dropdown overlay={<Menu>
                <Menu.Item>
                  <a target="_blank" rel="noopener noreferrer" href="http://github.com/huzzbuzz">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                  <a target="_blank" rel="noopener noreferrer" href="http://github.com/huzzbuzz">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                  <a target="_blank" rel="noopener noreferrer" href="http://github.com/huzzbuzz">3d menu item</a>
                </Menu.Item>
              </Menu>}>
                <a className="ant-dropdown-link">
                  Hover me <Icon type="down" />
                </a>
              </Dropdown>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="其他元素">
              <Dropdown overlay={<Menu>
                <Menu.Item key="0">
                  <a target="_blank" rel="noopener noreferrer" href="http://github.com/huzzbuzz/">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                  <a target="_blank" rel="noopener noreferrer" href="http://github.com/huzzbuzz/">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3" disabled>3d menu item（disabled）</Menu.Item>
              </Menu>}>
                <a className="ant-dropdown-link" >
                  Hover me <Icon type="down" />
                </a>
              </Dropdown>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="多级菜单">
              <Dropdown overlay={<Menu>
                <Menu.Item>1st menu item</Menu.Item>
                <Menu.Item>2nd menu item</Menu.Item>
                <SubMenu title="sub menu">
                  <Menu.Item>3d menu item</Menu.Item>
                  <Menu.Item>4th menu item</Menu.Item>
                </SubMenu>
                <SubMenu title="disabled sub menu" disabled>
                  <Menu.Item>5d menu item</Menu.Item>
                  <Menu.Item>6th menu item</Menu.Item>
                </SubMenu>
              </Menu>}>
                <a className="ant-dropdown-link" >
                  Cascading menu <Icon type="down" />
                </a>
              </Dropdown>
            </Card>
          </Col>
        </Row>
        <Row gutter={8} style={{ marginTop: '20px' }}>
          <Col span={8}>
            <Card noHovering title="触发方式">
              <Dropdown overlay={<Menu>
                <Menu.Item key="0">
                  <a href="http://github.com/huzzbuzz/">1st menu item</a>
                </Menu.Item>
                <Menu.Item key="1">
                  <a href="http://github.com/huzzbuzz/">2nd menu item</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">3d menu item</Menu.Item>
              </Menu>} trigger={['click']}>
                <a className="ant-dropdown-link" >
                  Click me <Icon type="down" />
                </a>
              </Dropdown>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="带下拉框的按钮">
              <Dropdown.Button overlay={menu}>
                Dropdown
              </Dropdown.Button>
              <Dropdown.Button
                overlay={menu}
                disabled
                style={{ marginLeft: 8 }}
              >
                Dropdown
              </Dropdown.Button>
              <Dropdown overlay={menu}>
                <Button style={{ marginLeft: 8 }}>
                  Button <Icon type="down" />
                </Button>
              </Dropdown>
            </Card>
          </Col>
          <Col span={8}>
            <Card noHovering title="弹出位置">
              <Dropdown overlay={menu} placement="bottomLeft">
                <Button>bottomLeft</Button>
              </Dropdown>{' '}
              <Dropdown overlay={menu} placement="bottomCenter">
                <Button>bottomCenter</Button>
              </Dropdown>{' '}
              <Dropdown overlay={menu} placement="bottomRight">
                <Button>bottomRight</Button>
              </Dropdown>
              <br />
              <br />
              <Dropdown overlay={menu} placement="topLeft">
                <Button>topLeft</Button>
              </Dropdown>{' '}
              <Dropdown overlay={menu} placement="topCenter">
                <Button>topCenter</Button>
              </Dropdown>{' '}
              <Dropdown overlay={menu} placement="topRight">
                <Button>topRight</Button>
              </Dropdown>
            </Card>
          </Col>
        </Row>
      </div >
    )
  }
}


export default DropdownDemo;
