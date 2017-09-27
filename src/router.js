import React from 'react';
import PropTypes from 'prop-types';
import { Router, Switch, Route, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import App from './containers/App';
import NotFound from './containers/NotFound/NotFound';

const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/dashboard1',
      component: () => import('./components/Dashboard/Dashboard1'),
    },
    {
      path: '/dashboard2',
      component: () => import('./components/Dashboard/Dashboard2'),
    },
    {
      path: '/mail',
      component: () => import('./components/Mail/Mail'),
    },
    {
      path: '/profile',
      component: () => import('./components/Pages/Profile'),
    },
    {
      path: '/blank',
      component: () => import('./components/Pages/Blank'),
    },
    {
      path: '/login',
      component: () => import('./components/Pages/Login'),
    },
    {
      path: '/signup',
      component: () => import('./components/Pages/Signup'),
    },
    {
      path: '/lock',
      component: () => import('./components/Pages/Lock'),
    },
    {
      path: '/todo',
      component: () => import('./components/Pages/Todo'),
    },
    {
      path: '/affix',
      component: () => import('./components/Navigation/Affix')
    },
    {
      path: '/pagination',
      component: () => import('./components/Navigation/Pagination')
    },
    {
      path: '/breadcrumb',
      component: () => import('./components/Navigation/Breadcrumb')
    },
    {
      path: '/steps',
      component: () => import('./components/Navigation/Steps')
    },
    {
      path: '/avatar',
      component: () => import('./components/UI/Avatar')
    },
    {
      path: '/button',
      component: () => import('./components/UI/Button')
    },
    {
      path: '/icon',
      component: () => import('./components/UI/Icon')
    },
    {
      path: '/tag',
      component: () => import('./components/UI/Tag')
    },
    {
      path: '/switch',
      component: () => import('./components/UI/Switch')
    },
    {
      path: '/calendar',
      component: () => import('./components/UI/Calendar')
    },
    {
      path: '/checkbox',
      component: () => import('./components/UI/Checkbox')
    },
    {
      path: '/radio',
      component: () => import('./components/UI/Radio')
    },
    {
      path: '/input',
      component: () => import('./components/UI/Input')
    },
    {
      path: '/timeline',
      component: () => import('./components/UI/Timeline')
    },
    {
      path: '/badge',
      component: () => import('./components/UI/Badge')
    },
    {
      path: '/slider',
      component: () => import('./components/UI/Slider')
    },
    {
      path: '/popconfirm',
      component: () => import('./components/Display/Popconfirm')
    },
    {
      path: '/popover',
      component: () => import('./components/Display/Popover')
    },
    {
      path: '/notification',
      component: () => import('./components/Display/Notification')
    },
    {
      path: '/message',
      component: () => import('./components/Display/Message')
    },
    {
      path: '/alert',
      component: () => import('./components/Display/Alert')
    },
    {
      path: '/tooltip',
      component: () => import('./components/Display/Tooltip')
    },
    {
      path: '/collapse',
      component: () => import('./components/Display/Collapse')
    },
    {
      path: '/tree',
      component: () => import('./components/Display/Tree')
    },
    {
      path: '/treeselect',
      component: () => import('./components/Display/TreeSelect')
    },
    {
      path: '/modal',
      component: () => import('./components/Display/Modal')
    },
    {
      path: '/tabs',
      component: () => import('./components/Display/Tabs')
    },
    {
      path: '/carousel',
      component: () => import('./components/Display/Carousel')
    },
    {
      path: '/progress',
      component: () => import('./components/Display/Progress')
    },
    {
      path: '/mention',
      component: () => import('./components/Entry/Mention')
    },
    {
      path: '/rate',
      component: () => import('./components/Entry/Rate')
    },
    {
      path: '/select',
      component: () => import('./components/Entry/Select')
    },
    {
      path: '/transfer',
      component: () => import('./components/Entry/Transfer')
    },
    {
      path: '/dropdown',
      component: () => import('./components/Entry/Dropdown')
    },
    {
      path: '/autocomplete',
      component: () => import('./components/Entry/AutoComplete')
    },
    {
      path: '/cascader',
      component: () => import('./components/Entry/Cascader')
    },
    {
      path: '/datepicker',
      component: () => import('./components/Entry/DatePicker')
    },
    {
      path: '/timepicker',
      component: () => import('./components/Entry/TimePicker')
    },
    {
      path: '/baseform',
      component: () => import('./components/Form/BaseForm')
    },
    {
      path: '/advancedform',
      component: () => import('./components/Form/AdvancedForm')
    },
    {
      path: '/advancedsearch',
      component: () => import('./components/Form/AdvancedSearch')
    },
    {
      path: '/basetable',
      component: () => import('./components/Table/BaseTable')
    },
    {
      path: '/advanced',
      component: () => import('./components/Table/Advanced')
    },
    {
      path: '/playground',
      component: () => import('./components/Table/Playground')
    },
    {
      path: '/custable',
      component: () => import('./components/Table/CusTable')
    },
    {
      path: '/grid',
      component: () => import('./components/Layout/Grid')
    },
    {
      path: '/gridplayground',
      component: () => import('./components/Layout/GridPlayground')
    },
    {
      path: '/layout',
      component: () => import('./components/Layout/Layout')
    },
    {
      path: '/card',
      component: () => import('./components/Layout/Card')
    },
    {
      path: '/menu',
      component: () => import('./components/Layout/Menu')
    },
    {
      path: '/logogather',
      component: () => import('./components/AntMotion/LogoGather')
    },
    {
      path: '/tableanim',
      component: () => import('./components/AntMotion/TableAnim')
    },
    {
      path: '/listanim',
      component: () => import('./components/AntMotion/ListAnim')
    },
    {
      path: '/detailswitch',
      component: () => import('./components/AntMotion/DetailSwitch')
    },
    {
      path: '/listsort',
      component: () => import('./components/AntMotion/ListSort')
    },
    {
      path: '/picanim',
      component: () => import('./components/AntMotion/PicAnim')
    },
    {
      path: '/banneranim',
      component: () => import('./components/AntMotion/BannerAnim')
    },
    {
      path: '/about',
      component: () => import('./components/About/About')
    }
  ]

  const Notfound = dynamic({
    app,
    component: () => NotFound,
  })

  return (
    <Router history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/dashboard1" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
          <Route component={Notfound} />
        </Switch>
      </App>
    </Router>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers;
