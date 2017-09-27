/** 菜单 */
import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
const SubMenu = Menu.SubMenu;

function getMenuSelectedKey(location) {
  if (!location) return '';
  const { pathname } = location;
  if (!pathname) return '';
  return pathname.replace('/', '');
}

const BearMenus = ({ lightThem, menuMode, siderOpenKeys, topHeaders, onMenuOpenChange, onSwitchTheme, onSwitchMenuMode, location }) => {

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

  const menukey = getMenuSelectedKey(location);

  return (
    <Menu {...menuProps} selectedKeys={Array.of(menukey)}>
      <SubMenu key="home" title={<span><Icon type="home" /><span>仪表盘</span></span>}>
        <Menu.Item key="dashboard1"><Link to="/dashboard1">仪表盘 1</Link></Menu.Item>
        <Menu.Item key="dashboard2"><Link to="/dashboard2">仪表盘 2</Link></Menu.Item>
      </SubMenu>

      <Menu.Item key="mail">
        <Link to="/mail"><Icon type="mail" /><span>邮箱</span></Link>
      </Menu.Item>

      <SubMenu key="mainlayout" title={<span><Icon type="layout" /><span>布局</span></span>}>
        <Menu.Item key="layout"><Link to="/layout">布局</Link></Menu.Item>
        <Menu.Item key="menu"><Link to="/menu">菜单</Link></Menu.Item>
        <Menu.Item key="card"><Link to="/card">卡片</Link></Menu.Item>
        <Menu.Item key="grid"><Link to="/grid">格栅</Link></Menu.Item>
        <Menu.Item key="gridplayground"><Link to="/gridplayground">格栅配置器</Link></Menu.Item>
      </SubMenu>

      <SubMenu key="general" title={<span><Icon type="filter" /><span>通用</span></span>}>
        <Menu.Item key="icon"><Link to="/icon">图标</Link></Menu.Item>
        <Menu.Item key="chart" style={{ display: 'none'}}><Link to="/chart">图表</Link></Menu.Item>
        <SubMenu key="navigation" title={<span><Icon type="tag-o" />导航</span>}>
          <Menu.Item key="pagination"><Link to="/pagination">分页</Link></Menu.Item>
          <Menu.Item key="breadcrumb"><Link to="/breadcrumb">面包屑</Link></Menu.Item>
          <Menu.Item key="steps"><Link to="/steps">步骤条</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="uielem" title={<span><Icon type="tag-o" />界面元素</span>}>
          <Menu.Item key="avatar"><Link to="/avatar">头像</Link></Menu.Item>
          <Menu.Item key="tag"><Link to="/tag">标签</Link></Menu.Item>
          <Menu.Item key="button"><Link to="/button">按钮</Link></Menu.Item>
          <Menu.Item key="switch"><Link to="/switch">开关</Link></Menu.Item>
          <Menu.Item key="calendar"><Link to="/calendar">日历</Link></Menu.Item>
          <Menu.Item key="radio"><Link to="/radio">单选框</Link></Menu.Item>
          <Menu.Item key="checkbox"><Link to="/checkbox">多选框</Link></Menu.Item>
          <Menu.Item key="input"><Link to="/input">输入框</Link></Menu.Item>
          <Menu.Item key="badge"><Link to="/badge">徽标数</Link></Menu.Item>
          <Menu.Item key="timeline"><Link to="/timeline">时间轴</Link></Menu.Item>
          <Menu.Item key="slider"><Link to="/slider">滑动输入条</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="dataentry" title={<span><Icon type="tag-o" />数据输入</span>}>
          <Menu.Item key="mention"><Link to="/mention">提及</Link></Menu.Item>
          <Menu.Item key="rate"><Link to="/rate">评分</Link></Menu.Item>
          <Menu.Item key="input" style={{ display: 'none'}}><Link to="/upload">上传</Link></Menu.Item>
          <Menu.Item key="select"><Link to="/select">选择器</Link></Menu.Item>
          <Menu.Item key="transfer"><Link to="/transfer">穿梭框</Link></Menu.Item>
          <Menu.Item key="dropdown"><Link to="/dropdown">下拉菜单</Link></Menu.Item>
          <Menu.Item key="autocomplete"><Link to="/autocomplete">自动完成</Link></Menu.Item>
          <Menu.Item key="cascader"><Link to="/cascader">级联选择</Link></Menu.Item>
          <Menu.Item key="datepicker"><Link to="/datepicker">日期选择框</Link></Menu.Item>
          <Menu.Item key="timepicker"><Link to="/timepicker">时间选择框</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="data" title={<span><Icon type="tag-o" />数据交互</span>}>
          <Menu.Item key="carousel"><Link to="/carousel">走马灯</Link></Menu.Item>
          <Menu.Item key="tabs"><Link to="/tabs">标签页</Link></Menu.Item>
          <Menu.Item key="modal"><Link to="/modal">对话框</Link></Menu.Item>
          <Menu.Item key="treeselect"><Link to="/treeselect">树选择</Link></Menu.Item>
          <Menu.Item key="progress"><Link to="/progress">进度条</Link></Menu.Item>
          <Menu.Item key="tree"><Link to="/tree">树形控件</Link></Menu.Item>
          <Menu.Item key="collapse"><Link to="/collapse">折叠面板</Link></Menu.Item>
          <Menu.Item key="popover"><Link to="/popover">气泡卡片</Link></Menu.Item>
          <Menu.Item key="tooltip"><Link to="/tooltip">文字提示</Link></Menu.Item>
          <Menu.Item key="alert"><Link to="/alert">警告提示</Link></Menu.Item>
          <Menu.Item key="message"><Link to="/message">全局提示</Link></Menu.Item>
          <Menu.Item key="notification"><Link to="/notification">通知提醒框</Link></Menu.Item>
          <Menu.Item key="popconfirm"><Link to="/popconfirm">气泡确认框</Link></Menu.Item>
        </SubMenu>
      </SubMenu>

      <SubMenu key="form" title={<span><Icon type="disconnect" /><span>表单</span></span>}>
        <Menu.Item key="baseform"><Link to="/baseform">基本</Link></Menu.Item>
        <Menu.Item key="advancedform"><Link to="/advancedform">高级</Link></Menu.Item>
        <Menu.Item key="advancedsearch"><Link to="/advancedsearch">自定义搜索</Link></Menu.Item>
      </SubMenu>

      <SubMenu key="table" title={<span><Icon type="wallet" /><span>表格</span></span>}>
        <Menu.Item key="basetable"><Link to="/basetable">基本</Link></Menu.Item>
        <Menu.Item key="advanced"><Link to="/advanced">高级</Link></Menu.Item>
        <Menu.Item key="crud" style={{ display: 'none'}}><Link to="/crud">CRUD</Link></Menu.Item>
        <Menu.Item key="playground"><Link to="/playground">动态</Link></Menu.Item>
        <Menu.Item key="custable"><Link to="/custable">自定义</Link></Menu.Item>
      </SubMenu>

      <SubMenu key="page" title={<span><Icon type="appstore-o" /><span>页面</span></span>}>
        <Menu.Item key="blank"><Link to="/blank">空白</Link></Menu.Item>
        <Menu.Item key="profile"><Link to="/profile">资料</Link></Menu.Item>
        <Menu.Item key="login"><Link to="/login">登录</Link></Menu.Item>
        <Menu.Item key="signup"><Link to="/signup">注册</Link></Menu.Item>
        <Menu.Item key="lock"><Link to="/lock">锁屏</Link></Menu.Item>
        <Menu.Item key="notfound"><Link to="/notfound">404</Link></Menu.Item>
      </SubMenu>

      <SubMenu key="motion" title={<span><Icon type="dot-chart" /><span>动画</span></span>}>
        <Menu.Item key="logogather"><Link to="/logogather">Logo动画</Link></Menu.Item>
        <Menu.Item key="tableanim"><Link to="/tableanim">表格增删</Link></Menu.Item>
        <Menu.Item key="listanim"><Link to="/listanim">列表动画</Link></Menu.Item>
        <Menu.Item key="detailswitch"><Link to="/detailswitch">详细说明切换</Link></Menu.Item>
        <Menu.Item key="listsort"><Link to="/listsort">列表交换位置</Link></Menu.Item>
        <Menu.Item key="picanim"><Link to="/picanim">图片详细切换</Link></Menu.Item>
        <SubMenu key="sub2" title="动画组件">
          <Menu.Item key="banneranim"><Link to="/banneranim">Banner动画</Link></Menu.Item>
        </SubMenu>
      </SubMenu>

      <Menu.Item key="about">
        <Link to="/about"><Icon type="copyright" /><span>关于</span></Link>
      </Menu.Item>

      {topHeaders && topHeaders.length > 0 && topHeaders.map(v => v)}
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
