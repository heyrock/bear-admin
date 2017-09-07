import React from 'react';
import PropTypes from 'prop-types';
import { Router, hashHistory } from 'dva/router';
import App from './containers/App';

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      breadcrumbName: '首页',
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          cb(null, { component: require('./components/Dashboard/Dashboard1') })
        }, 'app')
      },
      childRoutes: [
        {
          path: 'dashboard1',
          breadcrumbName: '仪表盘1',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Dashboard/Dashboard1'))
            }, 'dashboard1')
          },
        }, {
          path: 'dashboard2',
          breadcrumbName: '仪表盘2',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Dashboard/Dashboard2'))
            }, 'dashboard2')
          },
        }, {
          path: 'mail',
          breadcrumbName: '邮箱',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Mail/Mail'))
            }, 'mail')
          },
        }, {
          path: 'profile',
          breadcrumbName: '资料',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Pages/Profile'))
            }, 'profile')
          },
        }, {
          path: 'affix',
          breadcrumbName: '固钉',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Navigation/Affix'))
            }, 'affix')
          },
        }, {
          path: 'pagination',
          breadcrumbName: '分页',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Navigation/Pagination'))
            }, 'pagination')
          },
        }, {
          path: 'breadcrumb',
          breadcrumbName: '面包屑',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Navigation/Breadcrumb'))
            }, 'breadcrumb')
          },
        }, {
          path: 'steps',
          breadcrumbName: '步骤条',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Navigation/Steps'))
            }, 'steps')
          },
        }, {
          path: 'avatar',
          breadcrumbName: '头像',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Avatar'))
            }, 'avatar')
          },
        }, {
          path: 'button',
          breadcrumbName: '按钮',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Button'))
            }, 'button')
          },
        }, {
          path: 'icon',
          breadcrumbName: '图标',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Icon'))
            }, 'icon')
          },
        }, {
          path: 'tag',
          breadcrumbName: '标签',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Tag'))
            }, 'tag')
          },
        }, {
          path: 'switch',
          breadcrumbName: '开关',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Switch'))
            }, 'switch')
          },
        }, {
          path: 'calendar',
          breadcrumbName: '日历',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Calendar'))
            }, 'calendar')
          },
        }, {
          path: 'checkbox',
          breadcrumbName: '多选框',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Checkbox'))
            }, 'checkbox')
          },
        }, {
          path: 'radio',
          breadcrumbName: '单选框',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Radio'))
            }, 'radio')
          },
        }, {
          path: 'input',
          breadcrumbName: '输入框',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Input'))
            }, 'input')
          },
        }, {
          path: 'timeline',
          breadcrumbName: '时间轴',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Timeline'))
            }, 'timeline')
          },
        }, {
          path: 'badge',
          breadcrumbName: '徽标数',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Badge'))
            }, 'badge')
          },
        }, {
          path: 'slider',
          breadcrumbName: '滑动输入条',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/UI/Slider'))
            }, 'slider')
          },
        }, {
          path: 'popconfirm',
          breadcrumbName: '气泡确认框',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Popconfirm'))
            }, 'popconfirm')
          },
        }, {
          path: 'popover',
          breadcrumbName: '气泡卡片',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Popover'))
            }, 'popover')
          },
        }, {
          path: 'notification',
          breadcrumbName: '气泡确认框',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Notification'))
            }, 'notification')
          },
        }, {
          path: 'message',
          breadcrumbName: '全局提示',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Message'))
            }, 'message')
          },
        }, {
          path: 'alert',
          breadcrumbName: '警告提示',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Alert'))
            }, 'alert')
          },
        }, {
          path: 'tooltip',
          breadcrumbName: '文字提示',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Tooltip'))
            }, 'tooltip')
          },
        }, {
          path: 'collapse',
          breadcrumbName: '折叠面板',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Collapse'))
            }, 'collapse')
          },
        }, {
          path: 'tree',
          breadcrumbName: '树形控件',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Tree'))
            }, 'tree')
          },
        }, {
          path: 'treeselect',
          breadcrumbName: '树选择',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/TreeSelect'))
            }, 'treeselect')
          },
        }, {
          path: 'modal',
          breadcrumbName: '对话框',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Modal'))
            }, 'modal')
          },
        }, {
          path: 'tabs',
          breadcrumbName: '标签页',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Tabs'))
            }, 'tabs')
          },
        }, {
          path: 'carousel',
          breadcrumbName: '走马灯',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Carousel'))
            }, 'carousel')
          },
        }, {
          path: 'progress',
          breadcrumbName: '进度条',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Display/Progress'))
            }, 'progress')
          },
        }, {
          path: 'mention',
          breadcrumbName: '提及',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Entry/Mention'))
            }, 'mention')
          },
        }, {
          path: 'rate',
          breadcrumbName: '评分',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Entry/Rate'))
            }, 'rate')
          },
        }, {
          path: 'select',
          breadcrumbName: '选择器',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Entry/Select'))
            }, 'select')
          },
        }, {
          path: 'transfer',
          breadcrumbName: '穿梭框',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Entry/Transfer'))
            }, 'transfer')
          },
        }, {
          path: 'dropdown',
          breadcrumbName: '下拉菜单',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Entry/Dropdown'))
            }, 'dropdown')
          },
        }, {
          path: 'autocomplete',
          breadcrumbName: '自动完成',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Entry/AutoComplete'))
            }, 'autocomplete')
          },
        }, {
          path: 'cascader',
          breadcrumbName: '级联选择',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Entry/Cascader'))
            }, 'cascader')
          },
        }, {
          path: 'datepicker',
          breadcrumbName: '日期选择框',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Entry/DatePicker'))
            }, 'datepicker')
          },
        }, {
          path: 'timepicker',
          breadcrumbName: '时间选择框',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Entry/TimePicker'))
            }, 'timepicker')
          },
        }, {
          path: 'baseform',
          breadcrumbName: '基本表单',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Form/BaseForm'))
            }, 'baseform')
          },
        }, {
          path: 'advancedform',
          breadcrumbName: '高级表单',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Form/AdvancedForm'))
            }, 'advancedform')
          },
        }, {
          path: 'advancedsearch',
          breadcrumbName: '自定义搜索',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Form/AdvancedSearch'))
            }, 'advancedsearch')
          },
        }, {
          path: 'basetable',
          breadcrumbName: '基本表格',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Table/BaseTable'))
            }, 'basetable')
          },
        }, {
          path: 'advanced',
          breadcrumbName: '高级表格',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Table/Advanced'))
            }, 'advanced')
          },
        }, {
          path: 'playground',
          breadcrumbName: '动态表格',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Table/Playground'))
            }, 'playground')
          },
        }, {
          path: 'custable',
          breadcrumbName: '自定义表格',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Table/CusTable'))
            }, 'custable')
          },
        }, {
          path: 'grid',
          breadcrumbName: '格栅',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Layout/Grid'))
            }, 'grid')
          },
        }, {
          path: 'gridplayground',
          breadcrumbName: '格栅配置器',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Layout/GridPlayground'))
            }, 'gridplayground')
          },
        }, {
          path: 'layout',
          breadcrumbName: '布局',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Layout/Layout'))
            }, 'layout')
          },
        }, {
          path: 'card',
          breadcrumbName: '卡片',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Layout/Card'))
            }, 'card')
          },
        }, {
          path: 'menu',
          breadcrumbName: '菜单',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Layout/Menu'))
            }, 'menu')
          },
        }, {
          path: 'logogather',
          breadcrumbName: 'Logo动画',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/AntMotion/LogoGather'))
            }, 'logogather')
          },
        }, {
          path: 'tableanim',
          breadcrumbName: '表格增删',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/AntMotion/TableAnim'))
            }, 'tableanim')
          },
        }, {
          path: 'listanim',
          breadcrumbName: '列表动画',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/AntMotion/ListAnim'))
            }, 'listanim')
          },
        }, {
          path: 'detailswitch',
          breadcrumbName: '详细说明切换',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/AntMotion/DetailSwitch'))
            }, 'detailswitch')
          },
        }, {
          path: 'listsort',
          breadcrumbName: '列表交换位置',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/AntMotion/ListSort'))
            }, 'listsort')
          },
        }, {
          path: 'picanim',
          breadcrumbName: '图片详细切换',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/AntMotion/PicAnim'))
            }, 'picanim')
          },
        }, {
          path: 'banneranim',
          breadcrumbName: 'Banner',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/AntMotion/BannerAnim'))
            }, 'banneranim')
          },
        }, {
          path: 'about',
          breadcrumbName: '关于',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/About/About'))
            }, 'about')
          },
        }, {
          path: 'blank',
          breadcrumbName: '空白',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Pages/Blank'))
            }, 'blank')
          },
        }, {
          path: 'login',
          breadcrumbName: '登录',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Pages/Login'))
            }, 'Login')
          },
        }, {
          path: 'signup',
          breadcrumbName: '注册',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Pages/Signup'))
            }, 'Signup')
          },
        }, {
          path: 'lock',
          breadcrumbName: '锁定',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./components/Pages/Lock'))
            }, 'Lock')
          },
        }, {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./containers/NotFound/NotFound'))
            }, 'NotFound')
          },
        },
      ],
    },
  ]

  return <Router history={hashHistory} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
