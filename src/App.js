import React, { useEffect, useState } from 'react';

//  樣式重置
import 'normalize.css';
//  制定路由
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
//--------------------所有頁面共用元件-----------------------//
// 選單
import Menubar from './component/modules/Menubar';
import Navigation from './component/modules/Navigation';
//頁面切換時，要用捲軸讓頁面回到最上方
import ScrollToTop from './component/modules/ScrollToTop';

//--------------------個別頁面元件-----------------------//
import Home from './page/Home';
import ArguGetter from './page/ArguGetter';
import About from './page/Test2';
import Intro from './page/Intro';
import User from './page/User';
// import Test2 from './page/Test2';

// //-------------------------GA---------------------------//
// GA
import ReactGA from 'react-ga4';
// 讓GA能讀取react-router
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  // ReactGA.pageview(location.pathname);
});

function App(props) {
  const [showMenu] = useState(false);

  // 記住登入狀態
  const getUserInfo = JSON.parse(localStorage.getItem('AM_UserInfo'));
  const [userInfo, setUserInfo] = useState(getUserInfo);

  //-------------------------GA---------------------------//
  // 初始化
  useEffect(() => {
    ReactGA.initialize('G-FMVPFES0GP');
    ReactGA.send(window.location.pathname);
    // ReactGA.set({ page: location.pathname });
    // ReactGA.pageview(window.location.pathname);
    // ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  //------------------------------------

  const handleAuth = (path, onlyAdmin) => {
    // 保護路由:用戶權限
    if (userInfo) {
      // 保護路由:管理權限
      if (!onlyAdmin || userInfo.isAdmin) {
        return path;
      } else {
        history.push('/login');
      }
    } else {
      history.push('/login');
    }
  };

  return (
    //--------------------路由表-----------------------//

    // <Router>元件一定要放在最外層
    // <Router basename={process.env.PUBLIC_URL}>
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <>
        {/* 放切頁時不重新渲染的部份 s*/}
        {showMenu && <Menubar />}

        <Navigation userInfo={userInfo} setUserInfo={setUserInfo} />

        <ScrollToTop>
          {/* 放切頁時不重新渲染的部份 e*/}
          {/* 路由設定開始 */}
          <Switch>
            {/* 放"page資料夾"內的元件 */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/local">
              <ArguGetter />
            </Route>

            <Route exact path="/arguMaker">
              <ArguGetter />
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/intro">
              <Intro />
            </Route>

            <Route exact path="/user">
              <User userInfo={userInfo} setUserInfo={setUserInfo} />
            </Route>

            {/* 根路徑或未定義路徑，一律導向到/home */}
            <Redirect to={handleAuth('/home')} />
          </Switch>
        </ScrollToTop>
        {/* 路由設定結束 */}

        {/* 放切頁時不重新渲染的部份 s*/}
        {/* 放切頁時不重新渲染的部份 e*/}
      </>
    </Router>
  );
}

export default App;
