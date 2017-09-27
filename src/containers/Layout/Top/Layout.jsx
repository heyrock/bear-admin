import React from 'react';
import classnames from 'classnames';
import { Layout, Menu, Icon, Badge, Switch } from 'antd';
import { Link } from 'dva/router';
import { CommonMenus, CommonBeard, CommonFooter } from '../Common';
import { config } from 'utils';

const { Content, Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class LayoutTopMode extends React.Component {

  onSwitchSidebar = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'app/switchSidebar' })
  }

  onSwitchTheme = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'app/switchTheme' })
  }

  onMenuOpenChange = (openKeys) => {
    const { dispatch } = this.props;
    dispatch({ type: 'app/onMenuOpenChange', payload: { siderOpenKeys: openKeys } })
  }

  onSwitchMenuMode = (e) => {
    const { dispatch } = this.props;
    const key = e && e.key;
    if (key === 'left' || key === 'top') {
      dispatch({ type: 'app/switchFakeGlobal', payload: true })
      setTimeout(function () {
        dispatch({ type: 'app/switchFakeGlobal', payload: false })
        dispatch({ type: 'app/switchMenuMode', payload: key });
      }, 600);
    }
  }

  onSwitchHeaderFixed = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'app/switchHeaderFixed' })
  }

  render() {

    const { app, children, location } = this.props;
    const { lightThem, menuMode, siderOpenKeys, headerFixed } = app;

    // 顶部菜单拓展
    const topHeaders = [];
    topHeaders.push(
      <SubMenu className="topRightMenu" key="user" title={<span> <Icon type="user" />Bear熊</span>}>
        <Menu.Item key="profile"><Link to="/profile">资料</Link></Menu.Item>
        <Menu.Item key="logout">登出</Menu.Item>
      </SubMenu>
    );
    topHeaders.push(
      <SubMenu className="topRightMenu" key="setting" title={<span><Icon type="setting" />设置</span>}>
        <MenuItemGroup title="菜单布局">
          <Menu.Item key="left">左侧</Menu.Item>
          <Menu.Item key="top">顶部</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="菜单固定">
          <Menu.Item key="fixedheader">
            <Switch onChange={this.onSwitchHeaderFixed} checked={headerFixed} size="small" checkedChildren="是" unCheckedChildren="否" />
          </Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="主题设置">
          <Menu.Item key="theme">
            <Switch onChange={this.onSwitchTheme} checked={!lightThem} size="small" checkedChildren="暗" unCheckedChildren="亮" />
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    );
    topHeaders.push(
      <Menu.Item className="topRightMenu" key="notification">
        <Link to="/todo"><Badge count={6}><Icon type="notification" /></Badge></Link>
      </Menu.Item>
    );

    const menusProps = {
      location,
      menuMode,
      lightThem,
      siderOpenKeys,
      topHeaders,
      onSwitchTheme: this.onSwitchTheme,
      onMenuOpenChange: this.onMenuOpenChange,
      onSwitchMenuMode: this.onSwitchMenuMode
    }

    const beardProps = {
      location
    }

    return (
      <div>
        <Layout className='layout-top'>
          <Header
            className={classnames({ 'topHeaderWhite': lightThem || false }, { 'topHeaderFixed' : headerFixed || false })}
          >
            <div className='topLogo'>
              <img alt={'logo'} src={lightThem ? config.blackLogoSrc : config.whiteLogoSrc} />
              <span>{config.name}</span>
            </div>
            <CommonMenus {...menusProps} />
          </Header>
          <Content className={classnames('topContent', { 'topContentFixed' : headerFixed || false })}>
            <CommonBeard {...beardProps} />
            <div style={{ padding: 25 }}>
              {children}
            </div>
          </Content>
          <CommonFooter />
        </Layout>
      </div>
    );
  }
}


export default LayoutTopMode;
