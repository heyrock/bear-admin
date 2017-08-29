import React from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'dva/router';
import App from './containers/App';
import NotFound from './containers/NotFound/NotFound';

import {
  About,
  Blank,
  Login,
  Signup,
  Lock,
  Profile,

  Dashboard1,
  Dashboard2,
  Mail,
  Grid,
  GridPlayground,
  Layout,
  Card,
  Menu,
  TableAnim,
  ListAnim,
  DetailSwitch,
  ListSort,
  PicAnim,
  BannerAnim,
  LogoGather,

  Avatar,
  Button,
  Icon,
  Checkbox,
  Input,
  Radio,
  Switch,
  Timeline,
  Badge,
  Tag,
  Calendar,
  Slider,

  Affix,
  Pagination,
  Breadcrumb,
  Steps,

  Popconfirm,
  Popover,
  Notifications,
  Messages,
  Alert,
  Tooltip,
  Collapse,
  Tree,
  TreeSelect,
  Modal,
  Tabs,
  Carousel,
  Progress,

  Mention,
  Rate,
  Select,
  Transfer,
  Dropdown,
  AutoComplete,
  Cascader,
  DatePicker,
  TimePicker,

  BaseForm,
  AdvancedForm,
  AdvancedSearch,

  BaseTable,
  Advanced,
  CusTable,
  Playground
} from './components';


export default function() {
  return (
    <Router history={hashHistory}>
      <Route path="/" breadcrumbName="首页" component={App}>
        <IndexRedirect to="dashboard1" />
        <Route path="dashboard1" breadcrumbName="仪表盘1" component={Dashboard1} />
        <Route path="dashboard2" breadcrumbName="仪表盘2" component={Dashboard2} />

        <Route path="mail" breadcrumbName="邮箱" component={Mail} />

        <Route path="profile" breadcrumbName="资料" component={Profile}/>

        <Route path="affix" breadcrumbName="固钉" component={Affix}/>
        <Route path="pagination" breadcrumbName="分页" component={Pagination}/>
        <Route path="breadcrumb" breadcrumbName="面包屑" component={Breadcrumb}/>
        <Route path="steps" breadcrumbName="步骤条" component={Steps}/>

        <Route path="avatar" breadcrumbName="头像" component={Avatar}/>
        <Route path="button" breadcrumbName="按钮" component={Button}/>
        <Route path="icon" breadcrumbName="图标" component={Icon}/>
        <Route path="tag" breadcrumbName="标签" component={Tag}/>
        <Route path="switch" breadcrumbName="开关" component={Switch}/>
        <Route path="calendar" breadcrumbName="日历" component={Calendar}/>
        <Route path="checkbox" breadcrumbName="多选框" component={Checkbox}/>
        <Route path="radio" breadcrumbName="单选框" component={Radio}/>
        <Route path="input" breadcrumbName="输入框" component={Input}/>
        <Route path="timeline" breadcrumbName="时间轴" component={Timeline}/>
        <Route path="badge" breadcrumbName="徽标数" component={Badge}/>
        <Route path="slider" breadcrumbName="滑动输入条" component={Slider}/>


        <Route path="popconfirm" breadcrumbName="气泡确认框" component={Popconfirm}/>
        <Route path="popover" breadcrumbName="气泡卡片" component={Popover}/>
        <Route path="notification" breadcrumbName="气泡确认框" component={Notifications}/>
        <Route path="message" breadcrumbName="全局提示" component={Messages}/>
        <Route path="alert" breadcrumbName="警告提示" component={Alert}/>
        <Route path="tooltip" breadcrumbName="文字提示" component={Tooltip}/>
        <Route path="collapse" breadcrumbName="折叠面板" component={Collapse}/>
        <Route path="tree" breadcrumbName="树形控件" component={Tree}/>
        <Route path="treeselect" breadcrumbName="树选择" component={TreeSelect}/>
        <Route path="modal" breadcrumbName="对话框" component={Modal}/>
        <Route path="tabs" breadcrumbName="标签页" component={Tabs}/>
        <Route path="carousel" breadcrumbName="走马灯" component={Carousel}/>
        <Route path="progress" breadcrumbName="进度条" component={Progress}/>


        <Route path="mention" breadcrumbName="提及" component={Mention}/>
        <Route path="rate" breadcrumbName="评分" component={Rate}/>
        <Route path="select" breadcrumbName="选择器" component={Select}/>
        <Route path="transfer" breadcrumbName="穿梭框" component={Transfer}/>
        <Route path="dropdown" breadcrumbName="下拉菜单" component={Dropdown}/>
        <Route path="autocomplete" breadcrumbName="自动完成" component={AutoComplete}/>
        <Route path="cascader" breadcrumbName="级联选择" component={Cascader}/>
        <Route path="datepicker" breadcrumbName="日期选择框" component={DatePicker}/>
        <Route path="timepicker" breadcrumbName="时间选择框" component={TimePicker}/>

        <Route path="baseform" breadcrumbName="基本表单" component={BaseForm}/>
        <Route path="advancedform" breadcrumbName="高级表单" component={AdvancedForm}/>
        <Route path="advancedsearch" breadcrumbName="自定义搜索" component={AdvancedSearch}/>

        <Route path="basetable" breadcrumbName="基本表格" component={BaseTable}/>
        <Route path="advanced" breadcrumbName="高级表格" component={Advanced}/>
        <Route path="playground" breadcrumbName="动态表格" component={Playground}/>
        <Route path="custable" breadcrumbName="自定义表格" component={CusTable}/>

        <Route path="grid" breadcrumbName="格栅" component={Grid}/>
        <Route path="gridplayground" breadcrumbName="格栅配置器" component={GridPlayground}/>
        <Route path="layout" breadcrumbName="布局" component={Layout}/>
        <Route path="card" breadcrumbName="卡片" component={Card}/>
        <Route path="menu" breadcrumbName="菜单" component={Menu}/>

        <Route path="logogather" breadcrumbName="Logo动画" component={LogoGather}/>
        <Route path="tableanim" breadcrumbName="表格增删" component={TableAnim}/>
        <Route path="listanim" breadcrumbName="列表动画" component={ListAnim}/>
        <Route path="detailswitch" breadcrumbName="详细说明切换" component={DetailSwitch}/>
        <Route path="listsort" breadcrumbName="列表交换位置" component={ListSort}/>
        <Route path="picanim" breadcrumbName="图片详细切换" component={PicAnim}/>
        <Route path="banneranim" breadcrumbName="Banner" component={BannerAnim}/>

        <Route path="blank" breadcrumbName="空白" component={Blank}/>
        <Route path="login" breadcrumbName="登录" component={Login} />
        <Route path="signup" breadcrumbName="注册" component={Signup} />
        <Route path="lock" breadcrumbName="锁屏" component={Lock} />
        <Route path="about" breadcrumbName="关于" component={About}/>
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  )
}
