import React from 'react';
import classnames from 'classnames';
import { Layout } from 'antd';
import LeftHeader from './Header';
import { CommonMenus, CommonBeard, CommonFooter } from '../Common';
import { config } from 'utils';

const { Content, Sider } = Layout;

class LayoutLeftMode extends React.Component {

  onSwitchSidebar = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'app/switchSidebar' });
  }

  onSwitchTheme = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'app/switchTheme' });
  }

  onMenuOpenChange = (openKeys) => {
    const { dispatch } = this.props;
    dispatch({ type: 'app/onMenuOpenChange', payload: { siderOpenKeys: openKeys } });
  }

  onSwitchMenuMode = (e) => {
    const { dispatch, app } = this.props;
    const key = e && e.key;
    if (key === 'left' || key === 'top') {
      dispatch({ type: 'app/switchFakeGlobal', payload: true })
      setTimeout(function () {
        dispatch({ type: 'app/switchFakeGlobal', payload: false })
        dispatch({ type: 'app/switchMenuMode', payload: key });
      }, 600);
    }
    // 响应式模式下调用
    if (app && app.siderRespons) {
      this.onSwitchMenuPopover();
    }
  }

  onSwitchMenuPopover = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'app/switchMenuPopver' })
  }

  render() {

    const { app, children, location } = this.props;
    const { siderFold, siderRespons, lightThem, menuMode, siderOpenKeys, menuResponsVisible } = app;

    const menuProps = {
      location,
      menuMode,
      lightThem,
      siderOpenKeys,
      onSwitchTheme: this.onSwitchTheme,
      onMenuOpenChange: this.onMenuOpenChange,
      onSwitchMenuMode: this.onSwitchMenuMode
    }

    const headerProps = {
      siderFold,
      siderRespons,
      lightThem,
      siderOpenKeys,
      menuResponsVisible,
      onSwitchTheme: this.onSwitchTheme,
      onSwitchSidebar: this.onSwitchSidebar,
      onSwitchMenuMode: this.onSwitchMenuMode,
      onMenuOpenChange: this.onMenuOpenChange,
      onSwitchMenuPopover: this.onSwitchMenuPopover
    }

    const beardProps = {
      location,
      CommonMenus
    }

    const comStyle = {
      overflow: 'auto',
      height: '100vh',
      transition: 'all .3s cubic-bezier(.215,.61,.355,1)'
    }

    const dyncStyle = siderRespons ? comStyle : (
      !siderFold ? Object.assign(comStyle, { marginLeft: 200 }) : Object.assign(comStyle, { marginLeft: 64 })
    )

    return (
      <div className="layout-left">
        <Layout>
          {
            // 左侧菜单可折叠
            !siderRespons ?
              <Sider
                trigger={null}
                collapsible
                collapsed={siderFold}
                className={classnames("leftSider", { "leftSiderFold": siderFold || false }, { "leftSiderWhite": lightThem || false })}
              >
                <div className={classnames("leftSiderLogo", { "leftSiderLogoMini": siderFold || false })}>
                  <img alt={'logo'} src={lightThem ? config.blackLogoSrc : config.whiteLogoSrc} />
                  {siderFold ? '' : <span className={siderFold ? '' : 'action'}>{config.name}</span>}
                </div>
                <CommonMenus {...menuProps} />
              </Sider>
              :
              ''
          }
          <Layout style={dyncStyle}>
            <LeftHeader {...headerProps} />
            <CommonBeard {...beardProps} />
            <Content style={{ padding: 25 }}>
              {children}
            </Content>
            <CommonFooter />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default LayoutLeftMode;
