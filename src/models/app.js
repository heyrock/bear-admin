export default {
  namespace: 'app',
  state: {
    // 侧边栏折叠
    siderFold: localStorage.getItem('siderFold') === 'true',
    // 侧边栏响应式
    siderRespons: document.body.clientWidth < 992,
    menuResponsVisible: false,
    // 主题
    lightThem: localStorage.getItem('lightThem') !== 'false',
    // 菜单布局
    menuMode: localStorage.getItem('menuMode') || 'left',
    // 头部固定
    headerFixed: localStorage.getItem('headerFixed') !== 'false',
    siderOpenKeys: JSON.parse(localStorage.getItem('siderOpenKeys') || '[]'),
    fakeGlobal: false
  },
  subscriptions: {
    setup({ dispatch }) {
      window.onresize = () => {
        dispatch({ type: 'changeMenuMode' });
        dispatch({ type: 'siderResponsive' });
      }
    }
  },
  effects: {
    * changeMenuMode ({ payload }, { put, select }) {
      // 窗体宽度 < 1600px，菜单模式切换为：左侧
      const isLeftMune = document.body.clientWidth < 1600;
      if (isLeftMune) {
        yield put({ type: 'switchMenuMode', payload: 'left' });
      }
    },
    * siderResponsive ({ payload }, { put, select }) {
      const { app } = yield select(state => state);
      const isResponsive = document.body.clientWidth < 992;
      if (isResponsive !== app.siderRespons) {
        yield put({ type: 'switchSidebarResponsive', payload: isResponsive })
      }
    }
  },
  reducers: {
    switchSidebar(state) {
      localStorage.setItem('siderFold', !state.siderFold);
      return {
        ...state,
        siderFold: !state.siderFold,
      }
    },
    switchTheme (state) {
      localStorage.setItem('lightThem', !state.lightThem);
      return {
        ...state,
        lightThem: !state.lightThem,
      }
    },
    switchMenuMode (state, { payload }) {
      localStorage.setItem('menuMode', payload);
      return {
        ...state,
        menuMode: payload,
      }
    },
    onMenuOpenChange (state, { payload }) {
      localStorage.setItem('siderOpenKeys', JSON.stringify(payload.siderOpenKeys));
      return {
        ...state,
        ...payload,
      }
    },
    switchSidebarResponsive (state, { payload }) {
      return {
        ...state,
        siderRespons: payload,
      }
    },
    switchMenuPopver (state) {
      return {
        ...state,
        menuResponsVisible: !state.menuResponsVisible,
      }
    },
    switchFakeGlobal (state, { payload }) {
      return {
        ...state,
        fakeGlobal: payload,
      }
    },
    switchHeaderFixed (state, { payload }) {
      localStorage.setItem('headerFixed', !state.headerFixed);
      return {
        ...state,
        headerFixed: !state.headerFixed,
      }
    },
  },
}
