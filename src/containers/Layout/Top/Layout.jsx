import React from 'react';
import { Layout } from 'antd';
import { CommonMenus, CommonBeard, CommonFooter } from '../Common';
import { config } from 'utils';

const { Content, Header } = Layout;

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
      setTimeout(function() {
        dispatch({ type: 'app/switchFakeGlobal', payload: false })
        dispatch({ type: 'app/switchMenuMode', payload: key });
      }, 600);
    }
  }

  render() {

    const { app, children } = this.props;
    const { lightThem, menuMode, siderOpenKeys } = app;

    const menusProps = {
      menuMode,
      lightThem,
      siderOpenKeys,
      onSwitchTheme: this.onSwitchTheme,
      onMenuOpenChange: this.onMenuOpenChange,
      onSwitchMenuMode: this.onSwitchMenuMode
    }

    return (
      <div>
        <Layout className="layout-top">
          <Header className={lightThem ? 'topHeaderWhite' : ''}>
            <div className="topLogo">
              <img alt={'logo'} src={lightThem ? config.blackLogoSrc : config.whiteLogoSrc} />
              <span>{config.name}</span>
            </div>
            <CommonMenus {...menusProps} />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <CommonBeard {...this.props} />
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
