/** 菜单 */
import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Menu, Icon, Switch } from 'antd';
import { Link } from 'dva/router';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const BearMenus = ({ lightThem, menuMode, siderOpenKeys, onMenuOpenChange, onSwitchTheme, onSwitchMenuMode }) => {

  const comProps = {
    theme: lightThem ? "light" : "dark",
    mode: menuMode === 'left' ? 'inline' : 'horizontal',
    onClick: onSwitchMenuMode
  }

  // 左侧菜单模式，能操作openKeys
  let menuProps = menuMode === 'left' ? Object.assign(comProps, {
    onOpenChange: onMenuOpenChange,
    openKeys: siderOpenKeys
  }) : Object.assign(comProps, { style: { lineHeight: '64px' } });

  // 顶部菜单拓展
  const extendTopMenu = [];
  if (menuMode === 'top') {
    extendTopMenu.push(
      <SubMenu className="topRightMenu" key="user" title={<span> <Icon type="user" />Bear熊</span>}>
        <Menu.Item key="profile"><Link to="/profile">资料</Link></Menu.Item>
        <Menu.Item key="logout">登出</Menu.Item>
      </SubMenu>
    );
    extendTopMenu.push(
      <SubMenu className="topRightMenu" key="setting" title={<span><Icon type="setting" />设置</span>}>
        <MenuItemGroup title="菜单布局">
          <Menu.Item key="left">左侧</Menu.Item>
          <Menu.Item key="top">顶部</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="主题设置">
          <Menu.Item key="theme">
            <Switch onChange={onSwitchTheme} checked={!lightThem} size="small" checkedChildren="暗" unCheckedChildren="亮" />
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    );
    extendTopMenu.push(
      <Menu.Item className="topRightMenu" key="notification">
        <Badge count={6}><Icon type="notification" /></Badge>
      </Menu.Item>
    );
  }

  return (
    <Menu {...menuProps}>
      <SubMenu key="home" title={<span><Icon type="home" /><span>仪表盘</span></span>}>
        <Menu.Item key="home-1"><Link to="/dashboard1">仪表盘 1</Link></Menu.Item>
        <Menu.Item key="home-2"><Link to="/dashboard2">仪表盘 2</Link></Menu.Item>
      </SubMenu>

      <Menu.Item key="mail">
        <Link to="/mail"><Icon type="mail" /><span>邮箱</span></Link>
      </Menu.Item>

      <SubMenu key="layout" title={<span><Icon type="layout" /><span>布局</span></span>}>
        <Menu.Item key="layout-layout"><Link to="/layout">布局</Link></Menu.Item>
        <Menu.Item key="layout-menu"><Link to="/menu">菜单</Link></Menu.Item>
        <Menu.Item key="layout-card"><Link to="/card">卡片</Link></Menu.Item>
        <Menu.Item key="layout-grid"><Link to="/grid">格栅</Link></Menu.Item>
        <Menu.Item key="layout-gridplayground"><Link to="/gridplayground">格栅配置器</Link></Menu.Item>
      </SubMenu>

      <SubMenu key="general" title={<span><Icon type="filter" /><span>通用</span></span>}>
        <Menu.Item key="general-icon"><Link to="/icon">图标</Link></Menu.Item>
        <Menu.Item key="general-chart" style={{ display: 'none'}}><Link to="/chart">图表</Link></Menu.Item>
        <SubMenu key="navigation" title={<span><Icon type="tag-o" />导航</span>}>
          <Menu.Item key="general-pagination"><Link to="/pagination">分页</Link></Menu.Item>
          <Menu.Item key="navigation-breadcrumb"><Link to="/breadcrumb">面包屑</Link></Menu.Item>
          <Menu.Item key="general-steps"><Link to="/steps">步骤条</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="uielem" title={<span><Icon type="tag-o" />界面元素</span>}>
          <Menu.Item key="uielem-avatar"><Link to="/avatar">头像</Link></Menu.Item>
          <Menu.Item key="uielem-tag"><Link to="/tag">标签</Link></Menu.Item>
          <Menu.Item key="uielem-button"><Link to="/button">按钮</Link></Menu.Item>
          <Menu.Item key="uielem-switch"><Link to="/switch">开关</Link></Menu.Item>
          <Menu.Item key="uielem-calendar"><Link to="/calendar">日历</Link></Menu.Item>
          <Menu.Item key="uielem-radio"><Link to="/radio">单选框</Link></Menu.Item>
          <Menu.Item key="uielem-checkbox"><Link to="/checkbox">多选框</Link></Menu.Item>
          <Menu.Item key="uielem-input"><Link to="/input">输入框</Link></Menu.Item>
          <Menu.Item key="uielem-badge"><Link to="/badge">徽标数</Link></Menu.Item>
          <Menu.Item key="uielem-timeline"><Link to="/timeline">时间轴</Link></Menu.Item>
          <Menu.Item key="uielem-slider"><Link to="/slider">滑动输入条</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="dataentry" title={<span><Icon type="tag-o" />数据输入</span>}>
          <Menu.Item key="dataentry-mention"><Link to="/mention">提及</Link></Menu.Item>
          <Menu.Item key="dataentry-rate"><Link to="/rate">评分</Link></Menu.Item>
          <Menu.Item key="dataentry-input" style={{ display: 'none'}}><Link to="/upload">上传</Link></Menu.Item>
          <Menu.Item key="dataentry-select"><Link to="/select">选择器</Link></Menu.Item>
          <Menu.Item key="dataentry-transfer"><Link to="/transfer">穿梭框</Link></Menu.Item>
          <Menu.Item key="dataentry-dropdown"><Link to="/dropdown">下拉菜单</Link></Menu.Item>
          <Menu.Item key="dataentry-autocomplete"><Link to="/autocomplete">自动完成</Link></Menu.Item>
          <Menu.Item key="dataentry-cascader"><Link to="/cascader">级联选择</Link></Menu.Item>
          <Menu.Item key="dataentry-datepicker"><Link to="/datepicker">日期选择框</Link></Menu.Item>
          <Menu.Item key="dataentry-timepicker"><Link to="/timepicker">时间选择框</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="data" title={<span><Icon type="tag-o" />数据交互</span>}>
          <Menu.Item key="data-carousel"><Link to="/carousel">走马灯</Link></Menu.Item>
          <Menu.Item key="data-tabs"><Link to="/tabs">标签页</Link></Menu.Item>
          <Menu.Item key="data-modal"><Link to="/modal">对话框</Link></Menu.Item>
          <Menu.Item key="data-treeselect"><Link to="/treeselect">树选择</Link></Menu.Item>
          <Menu.Item key="data-progress"><Link to="/progress">进度条</Link></Menu.Item>
          <Menu.Item key="data-tree"><Link to="/tree">树形控件</Link></Menu.Item>
          <Menu.Item key="data-collapse"><Link to="/collapse">折叠面板</Link></Menu.Item>
          <Menu.Item key="data-popover"><Link to="/popover">气泡卡片</Link></Menu.Item>
          <Menu.Item key="data-tooltip"><Link to="/tooltip">文字提示</Link></Menu.Item>
          <Menu.Item key="data-alert"><Link to="/alert">警告提示</Link></Menu.Item>
          <Menu.Item key="data-message"><Link to="/message">全局提示</Link></Menu.Item>
          <Menu.Item key="data-notification"><Link to="/notification">通知提醒框</Link></Menu.Item>
          <Menu.Item key="data-popconfirm"><Link to="/popconfirm">气泡确认框</Link></Menu.Item>
        </SubMenu>
      </SubMenu>

      <SubMenu key="form" title={<span><Icon type="disconnect" /><span>表单</span></span>}>
        <Menu.Item key="form-base"><Link to="/baseform">基本</Link></Menu.Item>
        <Menu.Item key="form-advanced"><Link to="/advancedform">高级</Link></Menu.Item>
        <Menu.Item key="form-advancedsearch"><Link to="/advancedsearch">自定义搜索</Link></Menu.Item>
      </SubMenu>

      <SubMenu key="table" title={<span><Icon type="wallet" /><span>表格</span></span>}>
        <Menu.Item key="table-base"><Link to="/basetable">基本</Link></Menu.Item>
        <Menu.Item key="table-advanced"><Link to="/advanced">高级</Link></Menu.Item>
        <Menu.Item key="table-crud" style={{ display: 'none'}}><Link to="/crud">CRUD</Link></Menu.Item>
        <Menu.Item key="table-playground"><Link to="/playground">动态</Link></Menu.Item>
        <Menu.Item key="table-custable"><Link to="/custable">自定义</Link></Menu.Item>
      </SubMenu>

      <SubMenu key="page" title={<span><Icon type="appstore-o" /><span>页面</span></span>}>
        <Menu.Item key="page-blank"><Link to="/blank">空白</Link></Menu.Item>
        <Menu.Item key="page-profile"><Link to="/profile">资料</Link></Menu.Item>
        <Menu.Item key="page-login"><Link to="/login">登录</Link></Menu.Item>
        <Menu.Item key="page-signup"><Link to="/signup">注册</Link></Menu.Item>
        <Menu.Item key="page-lock"><Link to="/lock">锁屏</Link></Menu.Item>
        <Menu.Item key="page-notfound"><Link to="/notfound">404</Link></Menu.Item>
      </SubMenu>

      <SubMenu key="motion" title={<span><Icon type="dot-chart" /><span>动画</span></span>}>
        <Menu.Item key="motion-logoGather"><Link to="/logogather">Logo动画</Link></Menu.Item>
        <Menu.Item key="motion-tableanim"><Link to="/tableanim">表格增删</Link></Menu.Item>
        <Menu.Item key="motion-listanim"><Link to="/listanim">列表动画</Link></Menu.Item>
        <Menu.Item key="motion-detailSwitch"><Link to="/detailswitch">详细说明切换</Link></Menu.Item>
        <Menu.Item key="motion-ListSort"><Link to="/listsort">列表交换位置</Link></Menu.Item>
        <Menu.Item key="motion-PicDetailsAnim"><Link to="/picanim">图片详细切换</Link></Menu.Item>
        <SubMenu key="motion-sub2" title="动画组件">
          <Menu.Item key="1"><Link to="/banneranim">Banner动画</Link></Menu.Item>
        </SubMenu>
      </SubMenu>

      <Menu.Item key="about">
        <Link to="/about"><Icon type="copyright" /><span>关于</span></Link>
      </Menu.Item>

      {extendTopMenu.map(v => v)}
    </Menu>
  )
}

BearMenus.propTypes = {
  onMenuOpenChange: PropTypes.func,
  handleSwitchMenuMode: PropTypes.func,
  onSwitchTheme: PropTypes.func,
  lightThem: PropTypes.bool,
  menuMode: PropTypes.string,
  siderOpenKeys: PropTypes.array
}

export default BearMenus;
